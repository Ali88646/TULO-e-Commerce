import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tulos | e-Commerce | Backend",
  description: "A shopping app for education purpose",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
