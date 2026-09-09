"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const screens = [
  {
    id: "feed",
    title: "Curated Feed",
    subtitle: "Discover people on your wavelength",
    description:
      "Personalized discovery based on shared cultural values, passions, and relationship intentions.",
    image: "/assets/screen_feed.png",
  },
  {
    id: "profile",
    title: "Rich Profiles",
    subtitle: "Express the real you",
    description:
      "Share your lifestyle stories, prompts, and authentic photos verified with live selfie checks.",
    image: "/assets/screen_profile.png",
  },
  {
    id: "chat",
    title: "Real-time Chat",
    subtitle: "Conversations that flow easily",
    description:
      "Mutual matches unlock private messaging, voice notes, photos, and icebreakers.",
    image: "/assets/screen_chat.png",
  },
  {
    id: "welcome",
    title: "Private & Secure",
    subtitle: "Your safety comes first",
    description:
      "Granular privacy controls, instant blocking, and strict moderation protect your experience.",
    image: "/assets/screen_welcome.png",
  },
];

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const activeScreen = screens[activeTab];

  return (
    <section id="app-preview" className="app-preview-section section-pad">
      <div className="wrap">
        <div className="section-heading text-center">
          <p className="eyebrow">INSIDE THE APP</p>
          <h2>
            Crafted for connection.<br />
            <em>Designed for real life.</em>
          </h2>
          <p>
            A thoughtful dating experience built specifically for Nepali singles.
          </p>
        </div>

        {/* Minimal Tab Switcher */}
        <div className="preview-nav-tabs">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              type="button"
              className={`preview-nav-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <span>{screen.title}</span>
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="preview-layout">
          <div className="preview-info-col">
            <span className="preview-step-num">0{activeTab + 1}</span>
            <h3>{activeScreen.title}</h3>
            <h4>{activeScreen.subtitle}</h4>
            <p>{activeScreen.description}</p>

            <a href="#waitlist" className="text-link">
              Be there from day one <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="preview-phone-col">
            <div className="clean-phone-frame">
              <Image
                src={activeScreen.image}
                alt={`Lovydate ${activeScreen.title}`}
                width={300}
                height={600}
                className="clean-screen-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
