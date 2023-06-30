import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardi Lingerie Admin",
  description: "admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
