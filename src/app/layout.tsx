//layout.tsx is what wraps around all pages
//we put components that we want to show on every page here
import type { Metadata } from "next";
import "./globals.css";

//since were using navbar & contact (footer) for each page
import NavBar from "@/components/navbar";
import Contact from "@/components/contact";
import React from "react";

//your browser tab + search engine description
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Christabel Htoo's personal portfolio website!",
};

//this is the wrapper for all pages in website
//children is the actual page content
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "min-h-screen bg-white text-neutral-900">
        
        {/* an accesibility shortcut to allow keyboard users to skip to main content */}
        <a 
        href = "#main-content" 
        className = "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        > Skip to main content </a>

        {/* main layout container */}
        {/* creates [navbar] [main content] [footer]  */}
        <div className = "flex min-h-screen flex-col">
          
          {/* renders navbar at the top */}
          < NavBar />

          {/* renders the main content of the page, 
            screen readers can jump to this */}
          <main id="main-content" className = "flex-1">
            {children}
          </main>
          
          {/* renders contact footer at the bottom */}
          < Contact />

        </div>
      </body>
    </html>
  );
}

