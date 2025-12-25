import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Perplexity API client
const perplexity = new OpenAI({
    apiKey: process.env.PERPLEXITY_API_KEY,
    baseURL: 'https://api.perplexity.ai'
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend server is running' });
});

// Chat endpoint - proxy to Perplexity API
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        // Validate request
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({
                error: 'Invalid request. Messages array is required.'
            });
        }

        // Call Perplexity API
        const response = await perplexity.chat.completions.create({
            model: 'sonar',
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
            stream: false
        });

        // Return the response
        res.json({
            success: true,
            message: response.choices[0].message.content
        });

    } catch (error) {
        console.error('Perplexity API Error:', error);

        // Handle different error types
        if (error.status === 401) {
            return res.status(401).json({
                error: 'Invalid API key. Please check your Perplexity API key.'
            });
        } else if (error.status === 429) {
            return res.status(429).json({
                error: 'Rate limit exceeded. Please try again in a moment.'
            });
        } else {
            return res.status(500).json({
                error: 'Failed to get response from AI. Please try again.'
            });
        }
    }
});

// Contact Email Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;

        // Verify environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Email credentials missing in .env');
            return res.status(500).json({ error: 'Server configuration error: Email credentials missing.' });
        }

        // Dynamically import nodemailer to avoid startup errors if not installed yet
        const nodemailer = await import('nodemailer');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 1. Email to Company
        const mailOptionsCompany = {
            from: `"${name}" <${email}>`, // Shows sender's name
            to: process.env.EMAIL_USER,    // Send to company email
            subject: `New Contact Inquiry: ${service}`,
            text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
            `,
            html: `
<h3>New Contact Inquiry</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Service:</strong> ${service}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // 2. Auto-reply to Customer
        const mailOptionsCustomer = {
            from: `"Snow Cool Service" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "We received your message - Snow Cool",
            text: `Hi ${name},\n\nThank you for contacting Snow Cool. We have received your inquiry regarding ${service}.\n\nOur team will review your message and get back to you within 24 hours.\n\nBest regards,\nSnow Cool Team\n${process.env.EMAIL_USER}`,
            html: `
<h3>Thank you for contacting Snow Cool!</h3>
<p>Hi ${name},</p>
<p>We have received your inquiry regarding <strong>${service}</strong>.</p>
<p>Our team will review your message and get back to you within 24 hours.</p>
<br/>
<p>Best regards,</p>
<p><strong>Snow Cool Team</strong></p>
            `
        };

        // Send both emails
        await transporter.sendMail(mailOptionsCompany);
        await transporter.sendMail(mailOptionsCustomer);

        res.json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/chat`);
});
