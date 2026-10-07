import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "MARLIK.AI — دپارتمان هوش مصنوعی | میراث شکوه پارس در دنیای الگوریتم‌ها",
  description: "شرکت مارلیک با الهام از ظرافت بی‌نظیر جام‌های طلای تمدن آمارد، فعالیت خود را در حوزه هوش مصنوعی و اپلیکیشن آغاز کرده است. شکوه دیروز، هوش امروز، آینده‌ای درخشان.",
  keywords: ["هوش مصنوعی", "اپلیکیشن موبایل", "مارلیک", "یکپارچه‌سازی", "AI", "تهران"],
  openGraph: {
    title: "MARLIK.AI — میراث شکوه پارس در دنیای الگوریتم‌ها",
    description: "دپارتمان هوش مصنوعی مارلیک — شکوه دیروز، هوش امروز، آینده‌ای درخشان",
    locale: "fa_IR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdfcf9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
