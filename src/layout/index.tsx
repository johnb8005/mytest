import React, { useState } from "react";

import Footer from "./footer";
import Header from "./header";

import ToastProvider from "../common/notifications/provider";

function Layout({ children }: { children: any }) {
  const [showBanner, setBanner] = useState(false);

  const toggleBanner = () => setBanner(!showBanner);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />

      <ToastProvider>
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">{children} </div>
        </main>
      </ToastProvider>

      <div onClick={toggleBanner}>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
