import type { Metadata } from "next";
import './globals.css'
import NoScript from '@/components/noScript';

export const metadata: Metadata = {
  title: "Gerador de QR Code | Gratuito",
  description: "Gere QR Codes de forma simples e rápida — em menos de 1 minuto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <noscript>
          <NoScript />
        </noscript>
        {children}
      </body>
    </html>
  );
}