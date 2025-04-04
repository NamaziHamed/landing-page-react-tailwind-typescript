import React, { useEffect } from "react";
import Navbar from "./elements/navbar";
import Footer from "./elements/footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({title , children}: LayoutProps) {

    useEffect(() => {
        document.title = title;
    })

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}
