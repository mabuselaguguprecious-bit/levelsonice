"use client";

import Image from "next/image";

export default function SimpleNavbar() {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Image src="/images/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
        <h1>LEVELS ON ICE</h1>
      </div>
      
      <nav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#prices">Pricing</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <a href="#booking" className="book-btn">Book Now</a>
    </header>
  );
}