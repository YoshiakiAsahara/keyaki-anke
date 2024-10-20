import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import ToastProvider from "./components/ToastProvider";

export const metadata: Metadata = {
  title: "欅祭ピーチテックアンケートフォーム",
  description: "欅祭用アンケートフォームです！感想を記入してね。",
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
