import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "海士の本氣米 | おかずより先に、ごはんがなくなる。",
    template: "%s | 海士の本氣米"
  },
  description: "隠岐牛の完熟堆肥といわがき春香の牡蠣殻粉末で土づくり。島根県海士町の水と人の手で育てた、甘くてもっちりした島のお米です。",
  openGraph: {
    title: "海士の本氣米",
    description: "隠岐牛の完熟堆肥といわがき春香の牡蠣殻粉末で土づくり。島根県海士町の水と人の手で育てた、甘くてもっちりした島のお米です。",
    url: "https://example.com",
    siteName: "海士の本氣米",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Shippori+Mincho:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
