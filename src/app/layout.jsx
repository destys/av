import { Golos_Text } from "next/font/google";
import { Toaster } from "react-hot-toast";

const golos = Golos_Text({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import ModalProvider from "@/providers/ModalProvider";

import "./globals.scss";
import LayoutClient from "../components/layout/Layout";

export const metadata = {
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={golos.className}>
        <LayoutClient>
          <Toaster position="top-center" />
          <ModalProvider />
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
