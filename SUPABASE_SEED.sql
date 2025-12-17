-- Seed Data for Snow Cool Website
-- Copied from generate_seed.js output

INSERT INTO public.site_config (key, value, label) VALUES ('name', 'Snow Cool', 'Site Info') ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
INSERT INTO public.site_config (key, value, label) VALUES ('phone', '044-43552394', 'Site Info') ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
INSERT INTO public.site_config (key, value, label) VALUES ('email', 'snowcoolservice7@gmail.com', 'Site Info') ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
INSERT INTO public.site_config (key, value, label) VALUES ('address', 'No, 70 Subash Nagar 4th street Puthagaram Kolathur Chennai - 600099', 'Site Info') ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('ahu', 'Air Handling Unit (AHU)', 'Air Handling Unit (AHU) is a vital part of a heat, ventilation, and air-conditions system...', 'Air Handling Unit (AHU) is a vital part of a heat, ventilation, and air-conditions system and is used to condition and circulate air. We are professional ac amc service providers and are well experienced in Air Handling Unit (AHU) service and installation in Chennai.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('airbalancing', 'Airbalancing', 'Expert air balancing services to ensure optimal airflow and efficiency in your HVAC systems.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('cassette-ac', 'Cassette Type AC', 'Installation and service of cassette type air conditioners for efficient cooling.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('chiller', 'Chiller Service', 'Comprehensive chiller maintenance and repair services.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('cold-storage', 'Cold Storage Service', 'Specialized service for cold storage units to maintain precise temperatures.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('ductable', 'Ductable AC', 'Service for ductable AC units ensuring even cooling throughout your space.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('ducting', 'Ducting Work', 'Professional ducting installation and repair.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('floor-mounted', 'Floor Mounted Package AC', 'Servicing floor mounted package ACs for large spaces.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('floor-standing', 'Floor Standing AC', 'Maintenance for floor standing air conditioning units.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('split-ac', 'Hi-Wall Split AC', 'Expert service for hi-wall split ACs in homes and offices.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('insulation', 'Hot Insulation Materials', 'Provision and installation of quality insulation materials.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('rooftop', 'Roof Top AC', 'Service for rooftop AC units for commercial buildings.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('vrf', 'VRF System', 'Advanced VRF system installation and maintenance.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES ('window-ac', 'Window AC', 'Repair and service for traditional window AC units.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('installation', 'A/C Installation', 'We offer high quality installation of residential and commercial air conditioning...', 'We offer high quality installation of residential and commercial air conditioning with the use of professional equipment and fine materials, at a lower cost.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;
INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('maintenance', 'Maintenance and Repair', 'We provide a full range of repairing and maintenance of air conditioning systems...', 'We provide a full range of repairing and maintenance of air conditioning systems, ventilation systems, light industrial and industrial split systems.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;
INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('inspections', 'Annual Inspections', 'An annual inspection allows a technician to identify dirty coils and burned out contactors...', 'An annual inspection allows a technician to identify dirty coils and burned out contactors before they cause long term damage to your system.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;
INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('heating', 'Heating Services', 'During the lifetime operation of the heating system there may be situations...', 'During the lifetime operation of the heating system there may be situations that require reducing or increasing the number of sections, or flush the radiator.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;
INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('windows-units', 'Windows Units', 'Window air conditioner is installed in an aperture of window hole...', 'Window air conditioner is installed in an aperture of window hole in such a way that its outer part is in contact with the atmosphere.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;
INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('pre-season', 'Pre-season Preparation', 'Air conditioning systems are regulated appliances, requiring expert maintenance...', 'Air conditioning systems are regulated appliances, requiring expert maintenance to properly function at the best rate of energy consumption.', NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;
INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES ('duct-cleaning', 'Duct Cleaning', 'Thorough cleaning of ducts to improve air quality and system efficiency.', NULL, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;

INSERT INTO public.cms_pages (slug, title, subtitle, content) VALUES ('about', 'About Us', '25+ Years of Experience in Air Conditioning Services', 'ICY Private limited had been established in 2013 at Chennai. We proudly convey that we are the Authorized Dealers in VOLTAS & BLUE STAR (air conditioners & PEPSI coolers).

We run our business with dedicated, enthusiasm & qualified engineers on work strategy in Air Conditioning and Refrigeration with pleasant feedback of experience and achievements.

Under their gifted guidance, the Company has evolution rise and fly to step forward as the leading Sales and Service Dealers of all major national & multinational brands of air-conditioning systems in Chennai.

AC AMC services in Chennai provides you a full spectrum of work of any level of complexity. Our team consists of highly qualified professionals, who have been in the industry for no less than 6 years. We have gained extensive experience while solving the most complex technical and organizational tasks, what allows us to provide with the best service.') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO public.cms_pages (slug, title, subtitle, content) VALUES ('amc', 'Annual Maintenance Contract (AMC)', 'Ensure zero downtime for your AC units', '### ANNUAL MAINTENANCE CONTRACT (AMC)
Annual Maintenance Contract for Package and Central AC plants. Any machine needs regular maintenance to avoid undue break downs and enhance its operating performance with better life cycle. We offer PPM works on Monthly, Quarterly, Half yearly and yearly frequencies to ensure the near to zero down time for the AC units.

### TYPES OF AMC
- **Labour Contract** – Free of labour charges on service period.
- **Ordinary contract** – Based on Yearly AMC Service – 4 visits will be carried out to client. No need of labour charges. We repair works such as Overhauling & Gas Charging excluding of Compressor & fan motor Rewinding.
- **Without Compressor** – Compressor does not falls on free repair / replacement; however the replacement of compressor will be distribute by the manufacturer to us based on your purchase bill on its failure during guarantee period.
- **Comprehensive contract** – Free service unit and free service station. No Need of worry about your air conditioner and service cost. We cover all the Major issues, overhauling, Gas Charging, Fan Motor Re-winding, Compressor replacements, ETC.., of your air conditioner. Costing will be carried out in your CAMC Contract.

### BENEFITS & FEATURES OF CONTRACT
- Air conditioning unit will be checked initially before service, for Temperature, Amperage and Noise.
- Air filter will be cleaned. Electrical control panel will be checked and cleaned. i.e check-up of Selector switch. Thermostat P.T.C.R. Oscillation Motor, Vent Levers and Exhaust Levers, if necessary.
- Fan Motors will be checked and lubrication of the fan motor will be done.
- Stabilizer, tripper Switch, Electrical Power Point for the A/C. unit will be checked.
- A/C unit will be on test run for through check on temperature and working efficiency after service.
- Servicing A/c. unit will be on Monthly / Alternate Monthly / Quarterly Basis as per the customer’s desire. Any breakdown calls will be attended with immediate response on normal working hours.
- All electrical components and spares charges are to be paid immediately at the time of replacement.
- All transportation for movement of Air Conditioners must be borne the client for any Service Station Work.
- **Free Overhauling**: The air conditioning unit will be brought to the Service Station for General Overhauling whenever the condition of the unit requires to do so.
- **Free Transportation**: Free transportation will be provided whenever the air conditioning unit is collected to our service station for overhauling or any major repairs.
- **Free Gas Charging**: Gas Charging will be done if there is leak in the system at our Service Station. Any Gas leak due to mishandling of the unit will be subject to the sole discretion of Company.
- **Free Spares**: Supply of spares & materials will be done free of cost (only on receipt of defective spares), if required for the unit, as a result of wear and tear during the contract period.
- **Free Chemical Washing**: During Overhauling of the Air Conditioners, this chemical washing process will be done free of charges.') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO public.cms_pages (slug, title, subtitle, content) VALUES ('om', 'Operation And Maintenance', 'Specialized O & M Contractor', '### We are specialized O & M contractor For

**Hard Services**
- Mechanical And Electrical Maintenance
- BMS Operation
- Plant Maintenance
- HVAC (Operation & Maintenance)
- Plumbing & Water Management

**Soft Services**
- Housekeeping
- Janitorial Services
- Garden And Lawn Maintenance

**We are equipped to deploy trained**
- Technicians – Air conditioning
- Electrical with B License
- DG Technicians and WTP Technicians
- Engineers and Office staffs

**Undertake O & M works for**
- Commercial Malls
- Cineplex Office Building
- IT Parks
- Hospitals and Auditoriums Factories
- Process Cooling and Industrial Units

All staffs deployed will be covered with statutory requirements like ESIC, PF.') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO public.cms_pages (slug, title, subtitle, content) VALUES ('clients', 'Our Clients', 'Our Valuable Customers', 'We proudly serve a diverse range of clients across residential, commercial, and industrial sectors. Contact us for our reference list.') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;

DELETE FROM public.navigation;
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('Home', '/', 0, true);
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('About Us', '/about', 1, true);
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('Products Serviced', '/products', 2, true);
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Air Handling Unit (AHU)', '/products/ahu', id, 0, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Airbalancing', '/products/airbalancing', id, 1, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Cassette Type AC', '/products/cassette-ac', id, 2, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Chiller Service', '/products/chiller', id, 3, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Cold Storage Service', '/products/cold-storage', id, 4, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Ductable AC', '/products/ductable', id, 5, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Ducting Work', '/products/ducting', id, 6, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Floor Mounted Package AC', '/products/floor-mounted', id, 7, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Floor Standing AC', '/products/floor-standing', id, 8, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Hi-Wall Split AC', '/products/split-ac', id, 9, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Hot Insulation Materials', '/products/insulation', id, 10, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Roof Top AC', '/products/rooftop', id, 11, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'VRF System', '/products/vrf', id, 12, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Window AC', '/products/window-ac', id, 13, true 
                       FROM public.navigation WHERE path = '/products' LIMIT 1;
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('Services', '/services', 3, true);
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'A/C Installation', '/services/installation', id, 0, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Annual Inspections', '/services/inspections', id, 1, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Duct Cleaning', '/services/duct-cleaning', id, 2, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Heating Services', '/services/heating', id, 3, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Maintenance and Repair', '/services/maintenance', id, 4, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Pre-season Preparation', '/services/pre-season', id, 5, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT 'Windows Units', '/services/windows-units', id, 6, true 
                       FROM public.navigation WHERE path = '/services' LIMIT 1;
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('Our Clients', '/clients', 4, true);
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('AMC', '/amc', 5, true);
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('O & M', '/om', 6, true);
INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES ('Contact', '/contact', 7, true);
