import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppPreview from "@/components/AppPreview";
import DownloadBanner from "@/components/DownloadBanner";
import FloatingMascot from "@/components/FloatingMascot";

const questions = [
  [
    "Can I download Lovydate yet?",
    "Lovydate is in early access preparation. Join the waitlist on this page for launch updates and early beta access.",
  ],
  [
    "Who is Lovydate for?",
    "Lovydate is for singles across Nepal who want to meet people and explore authentic romantic connections.",
  ],
  [
    "How does matching work?",
    "Create your profile, share your interests, and discover people. When you both like each other, it’s a match and you can start a conversation.",
  ],
  [
    "How does Lovydate protect user safety?",
    "We enforce selfie verification, private encrypted messaging, and 24/7 in-app reporting and blocking tools.",
  ],
  [
    "What happens when I join the waitlist?",
    "Your contact details are saved for early access updates. Joining the waitlist reserves your place for the official launch.",
  ],
];

export default function Home() {
  return (
    <div id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Minimal Red Accent Strip */}
        <div className="manifesto-strip" aria-hidden="true" />

        {/* Experience Section */}
        <section id="experience" className="experience section-pad wrap">
          <div className="section-heading text-center">
            <p className="eyebrow">A LITTLE MORE YOU</p>
            <h2>
              More than a profile.
              <br />
              <em>A whole person.</em>
            </h2>
            <p>
              Your quirks, passions, and everyday moments. Make room for a
              connection that goes beyond a photo.
            </p>
          </div>

          <div id="features" className="feature-grid">
            <article className="feature-card feature-red">
              <div className="feature-card-top">
                <span>01 / THE SPARK</span>
              </div>
              <h3>
                Same wavelength.
                <br />
                New possibilities.
              </h3>
              <p>
                Share your interests and what you’re looking for. Discover
                someone with a little more in common.
              </p>
              <div className="interest-tags">
                <span>Music</span>
                <span>Travel</span>
                <span>Coffee</span>
                <span>Adventure</span>
              </div>
            </article>

            <article className="feature-card feature-blush">
              <div className="feature-card-top">
                <span>02 / THE CONNECTION</span>
              </div>
              <h3>
                A mutual yes.
                <br />A better hello.
              </h3>
              <p>
                When the feeling goes both ways, the conversation opens. Start
                with something you noticed about them.
              </p>
              <div className="feature-footnote">
                <span>Good things start with mutual interest.</span>
              </div>
            </article>

            <article className="feature-card feature-paper">
              <div className="feature-card-top">
                <span>03 / THE REAL YOU</span>
              </div>
              <h3>
                Let your
                <br />
                personality lead.
              </h3>
              <p>
                Bring your photos, prompts, and everyday moments together. Give
                someone a reason to be curious.
              </p>
              <div className="feature-footnote">
                <span>A little personality goes a long way.</span>
              </div>
            </article>
          </div>
        </section>

        {/* Clean App Showcase */}
        <AppPreview />

        {/* How It Works (Step-by-step visual journey) */}
        <section id="how-it-works" className="how-section section-pad">
          <div className="wrap">
            <div className="section-heading text-center">
              <p className="eyebrow">FROM FIRST LOOK TO FIRST DATE</p>
              <h2>
                Less overthinking.
                <br />
                <em>More butterflies.</em>
              </h2>
              <p>Meeting someone special shouldn’t feel complicated.</p>
            </div>

            <div className="steps-grid">
              <div className="step-item">
                <div className="step-img-wrap">
                  <Image
                    src="/assets/step_1_profile.jpg"
                    alt="Show up as yourself"
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="step-photo"
                  />
                  <span className="step-num">01</span>
                </div>
                <h3>Show up as yourself</h3>
                <p>
                  Add your photos, interests, and the little things that make
                  you, you.
                </p>
              </div>

              <div className="step-item">
                <div className="step-img-wrap">
                  <Image
                    src="/assets/step_2_match.jpg"
                    alt="Find a mutual spark"
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="step-photo"
                  />
                  <span className="step-num">02</span>
                </div>
                <h3>Find a mutual spark</h3>
                <p>
                  Explore profiles. Like someone who catches your eye. See if
                  they feel it too.
                </p>
              </div>

              <div className="step-item">
                <div className="step-img-wrap">
                  <Image
                    src="/assets/step_3_date.jpg"
                    alt="See where hello goes"
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="step-photo"
                  />
                  <span className="step-num">03</span>
                </div>
                <h3>See where hello goes</h3>
                <p>
                  Start a conversation. Take your time. Meet when you both feel
                  ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section id="safety" className="safety-section section-pad">
          <div className="wrap safety-grid">
            <div className="safety-copy">
              <p className="eyebrow safety-eyebrow">
                YOUR PACE. YOUR BOUNDARIES.
              </p>
              <h2>
                Big on sparks.
                <br />
                <em>Bigger on respect.</em>
              </h2>
              <p className="safety-intro">
                A connection should feel good. Stay in control of who you talk
                to and what you choose to share.
              </p>
              <a className="button button-light" href="#faq">
                Let’s talk safety <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="safety-list">
              <div className="safety-row">
                <span className="safety-num">01</span>
                <div>
                  <h3>Mutual interest comes first</h3>
                  <p>
                    Conversations begin only when you both choose to connect.
                  </p>
                </div>
              </div>

              <div className="safety-row">
                <span className="safety-num">02</span>
                <div>
                  <h3>You set the boundaries</h3>
                  <p>Share at your own pace. You never owe anyone a reply.</p>
                </div>
              </div>

              <div className="safety-row">
                <span className="safety-num">03</span>
                <div>
                  <h3>Block, report, and get support</h3>
                  <p>
                    Use in-app controls to report a concern or end an
                    interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section section-pad wrap">
          <div className="faq-header-side">
            <p className="eyebrow">LET’S CLEAR THINGS UP</p>
            <h2>
              A little curious?
              <br />
              <em>Good.</em>
            </h2>
            <p>Here’s what to know before your first hello.</p>
          </div>

          <div className="faq-list">
            {questions.map(([q, a], index) => (
              <details key={q} open={index === 0} className="faq-details">
                <summary className="faq-summary">
                  <span>{q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="team-inner">
            <div className="team-heading">
              <p className="section-label">THE PEOPLE BEHIND LOVYDATE</p>

              <h2>
                Built with intention.
                <br />
                <span>Led with purpose.</span>
              </h2>
            </div>

            <div className="team-people">
              <div className="team-person">
                <div className="team-person-top">
                  <span className="team-role">FOUNDER & OWNER</span>
                  <span className="team-index">01</span>
                </div>

                <h3>Arpan Dhangi</h3>

                <p>
                  Founder and owner of LovyDate, shaping the vision and
                  direction behind the platform.
                </p>
              </div>

              <div className="team-person">
                <div className="team-person-top">
                  <span className="team-role">CTO</span>
                  <span className="team-index">02</span>
                </div>

                <h3>Sahil Jogi</h3>

                <p>
                  Chief Technology Officer, leading the technology and
                  development behind LovyDate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download & Waitlist Banner */}
        <DownloadBanner />
      </main>

      {/* Clean Footer with Real Logo */}
      <footer className="footer wrap">
        <div className="footer-top">
          <a
            className="footer-brand-link"
            href="#top"
            aria-label="Lovydate home"
          >
            <Image
              src="/assets/textmark_icon.png"
              alt="Lovydate"
              width={140}
              height={29}
              className="footer-logo-img"
            />
          </a>
          <p className="footer-tagline">
            A little closer to your kind of person.
          </p>
          <a className="text-link" href="#waitlist">
            Your next chapter <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Lovydate. Made with love in Nepal.
          </span>
          <span>Authentic connections.</span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="footer-author-link"
          >
            Founded by Lovydate Group
            <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>

      {/* Support Chat Widget */}
      <FloatingMascot />
    </div>
  );
}
