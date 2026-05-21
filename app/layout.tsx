import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Հայկ և Աննա",
  description: "Հայկ և Աննա",
  openGraph: {
    title: "Հայկի և Աննայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://hayk-anna.vercel.app",
    siteName: "Հայկ և Աննա",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFFDFB]" style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
