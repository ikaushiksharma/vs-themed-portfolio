import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <main className="flex flex-col border text-white border-gray-theme rounded-lg w-full h-full bg-blue-background">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Container;
