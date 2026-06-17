import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vivagift HR — Hệ thống quản trị nhân sự nội bộ",
  description:
    "Cổng nhân sự nội bộ vivagift: nghỉ phép, hồ sơ, sáng kiến, dự án và vinh danh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
