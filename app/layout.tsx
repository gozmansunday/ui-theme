// External Imports
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

// Local Imports
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Theme",
  description: "UI Theme",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Theme accentColor="green" grayColor="auto" radius="medium">
          {children}
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
