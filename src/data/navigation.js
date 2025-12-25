export const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    {
        title: "Services",
        path: "/services",
        dropdown: [
            { title: "Installation", path: "/services/installation" },
            { title: "Maintenance", path: "/services/maintenance" },
            { title: "AMC Plans", path: "/amc" }
        ]
    },
    {
        title: "Products",
        path: "/products",
        dropdown: [
            { title: "Window AC", path: "/products/window-ac" },
            { title: "Hi-Wall Split AC", path: "/products/split-ac" },
            { title: "Hi-Wall Split Inverter AC", path: "/products/split-inverter-ac" },
            { title: "All Products", path: "/products" }
        ]
    },
    { title: "Clients", path: "/clients" },
    { title: "Contact", path: "/contact" }
];
