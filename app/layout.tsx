import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Levels On Ice – Premium Hair, Nails & Beauty Salon",
  description: "Experience premium hair, nails and beauty services in Mowbray.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}