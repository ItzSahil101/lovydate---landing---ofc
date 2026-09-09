import Image from "next/image";
import { ArrowDown, ArrowUpRight, Heart, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-editorial-section" aria-labelledby="hero-heading">
      {/* SVG Definitions for Desktop and Mobile Curve Masks */}
      <svg width="0" height="0" className="sr-only" aria-hidden="true">
        <defs>
          {/* Desktop S-Curve */}
          <clipPath id="heroCurveMask" clipPathUnits="objectBoundingBox">
            <path d="M 0.09,0 C 0.15,0.18 0.035,0.46 0.01,0.66 C -0.012,0.82 0.045,0.93 0.065,1 L 1,1 L 1,0 Z" />
          </clipPath>
          <clipPath id="heroRibbonMask" clipPathUnits="objectBoundingBox">
            <path d="M 0.04,0 C 0.10,0.18 -0.015,0.46 -0.04,0.66 C -0.062,0.82 0.0,0.93 0.02,1 L 1,1 L 1,0 Z" />
          </clipPath>

          {/* Mobile Arch Curve */}
          <clipPath id="heroMobileCurveMask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.065 Q 0.35,-0.035 1,0.22 L 1,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="heroMobileRibbonMask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.035 Q 0.35,-0.065 1,0.18 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Desktop Background Mountain & Pagoda Silhouette (Bottom Left) */}
      <div className="hero-nepal-bg" aria-hidden="true">
        <svg
          viewBox="0 0 720 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nepal-silhouette-svg"
          preserveAspectRatio="none"
        >
          {/* Distant Mountain Peak (Himalayas) */}
          <path
            d="M -20 320 L 140 180 L 220 230 L 330 110 L 410 190 L 500 130 L 640 270 L 740 230 L 740 320 Z"
            fill="url(#mountainGradFar)"
          />
          {/* Snow highlights on peaks */}
          <path
            d="M 330 110 L 310 145 L 325 140 L 335 155 L 348 135 L 360 148 L 330 110 Z"
            fill="rgba(255, 255, 255, 0.45)"
          />
          <path
            d="M 500 130 L 485 155 L 498 150 L 505 162 L 518 145 L 500 130 Z"
            fill="rgba(255, 255, 255, 0.4)"
          />
          <path
            d="M 140 180 L 128 200 L 138 198 L 145 208 L 155 195 L 140 180 Z"
            fill="rgba(255, 255, 255, 0.35)"
          />

          {/* Midground Hills */}
          <path
            d="M -30 320 L 60 240 L 180 275 L 290 220 L 430 270 L 580 230 L 740 290 L 740 320 Z"
            fill="url(#mountainGradMid)"
          />

          {/* Pagoda Temples Silhouettes */}
          <path
            d="M 100 320 L 100 280 L 85 280 L 105 260 L 105 252 L 95 252 L 110 235 L 115 235 L 115 220 L 118 220 L 118 235 L 123 235 L 138 252 L 128 252 L 128 260 L 148 280 L 133 280 L 133 320 Z"
            fill="url(#templeGrad)"
          />
          <path
            d="M 230 320 L 230 270 L 210 270 L 235 245 L 235 235 L 220 235 L 242 212 L 246 212 L 246 198 L 249 198 L 249 212 L 254 212 L 275 235 L 260 235 L 260 245 L 285 270 L 265 270 L 265 320 Z"
            fill="url(#templeGrad)"
          />
          <path
            d="M 370 320 L 370 285 L 358 285 L 375 268 L 375 260 L 366 260 L 380 246 L 382 246 L 382 232 L 385 232 L 385 246 L 389 246 L 402 260 L 393 260 L 393 268 L 410 285 L 398 285 L 398 320 Z"
            fill="url(#templeGrad)"
          />
          <path
            d="M 470 320 L 470 292 L 460 292 L 474 278 L 474 270 L 466 270 L 478 258 L 480 258 L 480 245 L 482 245 L 482 258 L 486 258 L 496 270 L 488 270 L 488 278 L 502 292 L 492 292 L 492 320 Z"
            fill="url(#templeGrad)"
          />

          <defs>
            <linearGradient
              id="mountainGradFar"
              x1="360"
              y1="100"
              x2="360"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#d9c5ba" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#f7efe9" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient
              id="mountainGradMid"
              x1="360"
              y1="200"
              x2="360"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#cfb8ab" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fbf6f0" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="templeGrad"
              x1="300"
              y1="190"
              x2="300"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#c5aca0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ecdcd3" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Vintage Stamp (Bottom Left) */}
        <div className="hero-vintage-stamp">
          <span>Good</span>
          <span>People</span>
          <span>Brighter</span>
          <span className="stamp-underline">Days</span>
        </div>
      </div>

      {/* Copy Half */}
      <div className="hero-copy-container">
        <div className="hero-copy-content">
          <div className="hero-main-body">
            <div className="hero-text-block">
              <p className="hero-eyebrow-tag">
                <span className="eyebrow-red-dot" /> A NEW WAY TO MEET. MADE FOR NEPAL.
              </p>

              <h1 id="hero-heading" className="hero-main-title">
                A little <em className="spark-accent">spark.</em>
                <br />
                A real connection<span className="title-red-dot">.</span>
              </h1>

              <p className="hero-lead-text">
                Meet people who are here for something real.{" "}
                <br className="hero-break-lg" />
                Verified profiles, meaningful conversations,{" "}
                <br className="hero-break-lg" />
                and connections that go beyond another swipe.
              </p>
            </div>

            <div className="hero-cta-group">
              <a className="button button-red hero-primary-cta" href="#waitlist">
                Get Early Access <ArrowUpRight size={18} />
              </a>

            </div>
          </div>

          {/* Three Clean Proof Cards */}
          <div className="hero-proof-cards">
            <div className="proof-card">
              <div className="proof-icon-wrap">
                <Users size={19} className="proof-icon" />
              </div>
              <div className="proof-text-wrap">
                <strong>10,000+</strong>
                <span>On Waitlist</span>
              </div>
            </div>

            <div className="proof-divider" />

            <div className="proof-card">
              <div className="proof-icon-wrap">
                <ShieldCheck size={19} className="proof-icon" />
              </div>
              <div className="proof-text-wrap">
                <strong>Verified</strong>
                <span>Protected Profiles</span>
              </div>
            </div>

            <div className="proof-divider" />

            <div className="proof-card">
              <div className="proof-icon-wrap">
                <Heart size={19} className="proof-icon" />
              </div>
              <div className="proof-text-wrap">
                <strong>Made for Nepal</strong>
                <span>Real Connections</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Half with Arch/S-Curve Divider */}
      <div className="hero-photo-container">
        {/* Soft decorative blush glow ribbon along the curve */}
        <div className="hero-curve-ribbon" aria-hidden="true" />

        <div className="hero-photo-wrapper">
          <Image
            src="/assets/nepali_couple.jpg"
            alt="A Nepali couple in traditional attire sharing a warm moment together"
            fill
            sizes="(max-width: 860px) 100vw, 55vw"
            priority
            className="hero-couple-image"
          />
          <div className="hero-photo-vignette" />

          {/* Top-Right Stamp Badge (Mobile / Tablet) */}
          <div className="hero-photo-top-stamp" aria-hidden="true">
            <span>Let</span>
            <span>Real</span>
            <span>Connections</span>
            <span className="stamp-underline">Happen</span>
          </div>

          {/* Editorial Caption on Photo */}
          <div className="hero-editorial-overlay">
            <span className="editorial-script-tag">your kind of</span>
            <div className="editorial-chemistry-line">
              <h2 className="editorial-main-title">
                chemistry<span className="chemistry-red-dot">.</span>
              </h2>

              {/* Red Doodled Heart Icon & Line */}
              <svg
                className="heart-doodle-svg"
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 5 28 Q 15 26 22 20 C 18 10 26 2 34 8 C 40 2 48 10 44 20 C 38 28 26 36 22 38 Q 30 38 45 35 Q 55 33 60 34"
                  stroke="#e73832"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Silhouette Mountains Overlay across bottom of photo */}
          <div className="hero-mobile-mountain-overlay" aria-hidden="true">
            <svg
              viewBox="0 0 600 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mobile-nepal-svg"
              preserveAspectRatio="none"
            >
              {/* Mountains */}
              <path
                d="M -10 240 L 90 140 L 160 180 L 250 80 L 320 150 L 400 95 L 510 200 L 610 160 L 610 240 Z"
                fill="url(#mobMountainGrad)"
              />
              <path
                d="M 250 80 L 235 110 L 248 105 L 255 120 L 265 102 L 275 112 L 250 80 Z"
                fill="rgba(255, 255, 255, 0.6)"
              />
              <path
                d="M 400 95 L 388 118 L 398 114 L 404 124 L 414 110 L 400 95 Z"
                fill="rgba(255, 255, 255, 0.5)"
              />

              {/* Temples & Pagodas */}
              <path
                d="M 380 240 L 380 215 L 370 215 L 384 200 L 384 194 L 376 194 L 388 182 L 390 182 L 390 170 L 392 170 L 392 182 L 396 182 L 406 194 L 398 194 L 398 200 L 412 215 L 402 215 L 402 240 Z"
                fill="url(#mobTempleGrad)"
              />
              <path
                d="M 470 240 L 470 205 L 455 205 L 474 185 L 474 178 L 464 178 L 480 160 L 483 160 L 483 148 L 485 148 L 485 160 L 489 160 L 505 178 L 494 178 L 494 185 L 514 205 L 498 205 L 498 240 Z"
                fill="url(#mobTempleGrad)"
              />

              {/* Birds */}
              <path
                d="M 520 130 Q 525 125 530 128 Q 535 125 540 130"
                stroke="#c4a597"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 545 120 Q 549 116 553 118 Q 557 116 561 120"
                stroke="#c4a597"
                strokeWidth="1.1"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient
                  id="mobMountainGrad"
                  x1="300"
                  y1="80"
                  x2="300"
                  y2="240"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#f3e6de" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#faefe8" stopOpacity="0.98" />
                </linearGradient>
                <linearGradient
                  id="mobTempleGrad"
                  x1="450"
                  y1="140"
                  x2="450"
                  y2="240"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#dcbbae" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ebd6cc" stopOpacity="0.95" />
                </linearGradient>
              </defs>
            </svg>

            {/* Stamp on Mobile Mountain Slope */}
            <div className="hero-mobile-stamp">
              <span>Good</span>
              <span>People</span>
              <span>Brighter</span>
              <span className="stamp-underline">Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
