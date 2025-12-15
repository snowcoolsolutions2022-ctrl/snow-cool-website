export const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    {
        title: "Services",
        path: "/services",
        dropdown: [
            { title: "Installation", path: "/services/installation" },
            { title: "Maintenance", path: "/services/maintenance" },
            { title: "AMC Plans", path: "/amc" },
            { title: "O & M", path: "/om" }
        ]
    },
    {
        title: "Products",
        path: "/products",
        dropdown: [
            { title: "VRF Systems", path: "/products/vrf" },
            { title: "Cassette AC", path: "/products/cassette-ac" },
            { title: "All Products", path: "/products" }
        ]
    },
    { title: "Clients", path: "/clients" },
    { title: "Contact", path: "/contact" }
];
