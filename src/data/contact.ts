export interface ContactLink {
    label: string;
    href: string;
    icon: "linkedin" | "github" | "instagram" | "whatsapp" | "email";
}

export const contactEmail = "wesleysutatio291104@gmail.com";

export const contactLinks: ContactLink[] = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/wesley-sutatio-4b423634b",
        icon: "linkedin",
    },
    {
        label: "GitHub",
        href: "https://github.com/wesleysutatio",
        icon: "github",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/wesleysutatio",
        icon: "instagram",
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/6285795070058",
        icon: "whatsapp",
    },
];