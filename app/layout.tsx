import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import ToastProvider from "./components/ToastProvider";

export const metadata: Metadata = {
  title: "欅祭PeachTechアンケートフォーム",
  description:
    "欅祭に来てくださった方々がPeachTechのブースの感想を簡単に作成できるアンケートフォームです！ PeachTechの学生が日頃から技術に向き合い作り上げたWebサイトやアプリ、ゲームに関する感想を募集しています！",
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
