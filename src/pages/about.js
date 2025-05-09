import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/video'
import Spanish from './spanish'
import Rotation from '../components/rotation'
import circletext_nologo from '../assets/circletext_nologo.png'
import pexels_mart_production from "../assets/pexels_mart_production.mp4";

import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen max-h-screen flex flex-col justify-between p-6 md:p-12 font-serif text-black">
      <header className="flex justify-between text-sm mb-8">
        <nav className="space-x-4">
          <a href="#" className="hover:underline">work</a>
          <a href="#" className="hover:underline">about</a>
          <a href="mailto:hello@itsproof.co" className="hover:underline">email us</a>
        </nav>
        <a href="#" className="hover:underline">en español</a>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl leading-snug mb-6">
          Proof is the design and technology practice of <span className="underline">Segacy</span> and <span className="underline">Maria</span>, two childhood friends from NYC.
        </h1>
        <p className="text-sm md:text-base mb-4">
          Thanks for stopping by! In our independent careers, we’ve had the pleasure of working for companies like <span className="underline">Spotify</span>, <span className="underline">Book of the Month</span>, and <span className="underline">This One</span>. We love building things for thoughtful and imaginative people looking to make an impact.
        </p>
        <p className="text-sm md:text-base mb-8">
          When we’re not at our desks, we love traveling, reading, and hanging out without purpose. We’d love to work together! Get in touch by emailing us at <a href="mailto:hello@itsproof.co" className="underline">hello@itsproof.co</a>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left text-sm md:text-base">
          <div>
            <h2 className="italic mb-2">Services</h2>
            <ul className="space-y-1">
              <li>Strategy</li>
              <li>Web Design & Development</li>
              <li>App Design & Development</li>
              <li>Branding</li>
              <li>Digital Design</li>
              <li>Copywriting & Editing</li>
            </ul>
          </div>
          <div>
            <h2 className="italic mb-2">Capabilities</h2>
            <ul className="space-y-1">
              <li>Informational websites</li>
              <li>Editorial platforms</li>
              <li>Portfolios & microsites</li>
              <li>Pitch & tone decks</li>
              <li>Online shops</li>
              <li>Third-party integrations</li>
              <li>Strategic tktk</li>
            </ul>
          </div>
        </div>

        <p className="italic text-xs md:text-sm mt-10">
          As a part of the Proof family, we’ve created <span className="underline">Sunday Lighthouse</span>, dedicated to projects in the wellness space.
        </p>
      </main>

      <footer className="text-xs mt-8 flex justify-between">
        <div className="space-x-4">
          <a href="mailto:hello@itsproof.co" className="hover:underline">email us</a>
          <a href="#" className="hover:underline">instagram</a>
        </div>
        <div>2025. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
