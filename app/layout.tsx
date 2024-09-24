import type { Metadata } from "next";
import "@/styles/theme.scss";
import "./globals.css";
import { ToggleProvider } from "@/context/toggleContext";

export const metadata: Metadata = {
    title: "Invitatie Botez",
    description: "Deschide si fi surprins",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ToggleProvider>
                    {children}
                </ToggleProvider>
            </body>
        </html>
    );
}
