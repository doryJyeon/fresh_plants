import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";

const notoSerifKR = Noto_Serif_KR({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Fresh plants",
  description: "가장 싱그러운 식물 쇼핑몰",
  icons: {
    icon: "/images/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSerifKR.className}>
        <Menu />

        <div className="contents">
          <section className="content__section">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
