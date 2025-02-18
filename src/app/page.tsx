"use client";
import Head from 'next/head';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import IceCreamStory from './components/IceCreamStory';
import IceCreamShopLocator from './components/IceCreamShopLocator';
import FlavorCreations from './components/UserFlavorCreationPage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 text-white">
      <Head>
        <title>Ice Cream Studio</title>
        <meta name="description" content="Explore the world of ice cream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <Flavors />
        <IceCreamStory />
        <IceCreamShopLocator />
        <FlavorCreations />
      </main>
      <Footer />
    </div>
  );
}
