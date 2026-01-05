import { Sora } from '@next/font/google';
import React from 'react';
import TopLeftImg from "../components/TopLeftImg"; // Mettez le bon chemin
import Nav from "../components/Nav"; // Mettez le bon chemin
import Header from "../components/Header"; // Mettez le bon chemin

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      
  {children}


    </div>
  );
};

export default Layout;