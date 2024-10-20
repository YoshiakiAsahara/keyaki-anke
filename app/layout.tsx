import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import ToastProvider from "./components/ToastProvider";

export const metadata: Metadata = {
  title: "keyaki-ten",
  description: "This is a survey form for the Keyaki Festival.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ToastProvider>
          <Header />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
