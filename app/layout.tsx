import type { Metadata } from "next";
import "@/styles/theme.scss";
import "./globals.css";
import { ToggleProvider } from "@/context/toggleContext";
import { Merienda, Roboto_Slab } from "next/font/google";

export const metadata: Metadata = {
    title: "Invitatie Botez",
    description: "Deschide-mă pănă la 05 Oct 2024",
    openGraph: {
        title: "Invitație Botez",
        description: "Deschide-mă pănă la 05 Oct 2024",
        url: "matei.vercel.app",
        siteName: "Invitație Botez",
        images: [
            {
                url: "/assets/mail.png", // Ensure this image is hosted publicly
                width: 1200,
                height: 630,
                alt: "Description of the image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Invitație Botez",
        description: "Deschide-mă pănă la 05 Oct 2024",
        images: ["/assets/mail.png"],
    },
};

const robotoSlab = Roboto_Slab({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-roboto-slab"
})

const merienda = Merienda({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-merienda"
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoSlab.variable} ${merienda.variable}`}>
                <ToggleProvider>
                    {children}
                </ToggleProvider>
            </body>
        </html>
    );
}
