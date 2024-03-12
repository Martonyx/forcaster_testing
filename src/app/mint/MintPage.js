"use client"
import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component

const MintPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-md p-8">
          <img src="dragonbaldz.jpg" alt="NFT to be minted" className="rounded-lg mb-6" />
          <div className="flex justify-center">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                window.location.href = 'https://uplink.wtf/bamehouse/mintboard';
              }}
            >
              Mint NFT
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MintPage;
