import React from "react";

export const metadata = {
  title: "Child Safety Standards | Lovydate",
  description:
    "Read Lovydate's Child Safety Standards, including our 18+ requirement, zero-tolerance policy for child sexual abuse and exploitation, reporting process, and safety contact.",
  alternates: {
    canonical: "https://lovydate.fun/child-safety",
  },
};

const pageStyle = `
  * { box-sizing: border-box; }
  .policy-wrap {
    min-height: 100vh;
    background: #fffaf7;
    color: #282323;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.75;
  }
  .policy-header {
    padding: 34px 20px 24px;
    border-bottom: 1px solid #eee3de;
    text-align: center;
  }
  .policy-brand {
    color: #c7473b;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -1px;
    text-decoration: none;
  }
  .policy-header p {
    margin: 5px 0 0;
    color: #766b67;
    font-size: 14px;
  }
  .policy-main {
    width: min(900px, calc(100% - 36px));
    margin: 0 auto;
    padding: 36px 0 64px;
  }
  .policy-article {
    padding: clamp(22px, 5vw, 48px);
    border: 1px solid #f0e5df;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 10px 40px rgba(70, 40, 25, .045);
    overflow-wrap: anywhere;
  }
  .policy-article h1 {
    margin: 0 0 8px;
    font-size: clamp(30px, 5vw, 42px);
    line-height: 1.2;
    letter-spacing: -1.3px;
  }
  .policy-article h2 {
    margin: 34px 0 10px;
    padding-bottom: 7px;
    border-bottom: 1px solid #f1e6e1;
    font-size: 21px;
    line-height: 1.4;
  }
  .policy-article p { margin: 10px 0; }
  .policy-article ul {
    padding-left: 24px;
    margin: 8px 0 16px;
  }
  .policy-article li { margin: 5px 0; }
  .policy-article a {
    color: #b83d32;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .policy-updated {
    margin: 0 0 25px;
    color: #81736d;
    font-size: 14px;
  }
  .policy-notice {
    margin: 22px 0;
    padding: 16px 18px;
    border-left: 4px solid #c7473b;
    border-radius: 6px;
    background: #fff4ef;
  }
  .policy-footer {
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid #eee3de;
    color: #786e69;
    font-size: 13px;
    text-align: center;
  }
  @media (max-width: 600px) {
    .policy-header { padding-top: 25px; }
    .policy-main { width: calc(100% - 22px); padding-top: 20px; }
    .policy-article { padding: 22px 18px; border-radius: 12px; }
    .policy-article h2 { font-size: 19px; }
  }
`;

export default function ChildSafetyPage() {
  return (
    <>
      <style>{pageStyle}</style>
      <div className="policy-wrap">
        <header className="policy-header">
          <a className="policy-brand" href="https://lovydate.fun/">
            Lovydate
          </a>
          <p>Safety, responsibility, and community protection</p>
        </header>

        <main className="policy-main">
          <article className="policy-article">
            <h1>Lovydate Child Safety Standards</h1>
            <p className="policy-updated">Last updated: October 31, 2026</p>

            <p>
              Lovydate is committed to maintaining a safe environment for
              adults. These standards explain our approach to preventing
              child sexual abuse and exploitation (CSAE) on our platform.
            </p>

            <div className="policy-notice">
              <strong>Zero-tolerance policy:</strong> Lovydate strictly
              prohibits child sexual abuse and exploitation, child sexual
              abuse material (CSAM), grooming, and any behavior that
              sexually exploits or endangers minors.
            </div>

            <h2>1. Age Requirement</h2>
            <ul>
              <li>Lovydate is exclusively for people aged 18 and older.</li>
              <li>Anyone under 18 is prohibited from creating or using an account.</li>
              <li>
                Accounts identified as belonging to minors may be suspended
                or removed.
              </li>
              <li>
                Users can report suspected underage accounts through the
                available reporting features.
              </li>
            </ul>

            <h2>2. Prohibited Content and Behavior</h2>
            <p>The following are strictly prohibited on Lovydate:</p>
            <ul>
              <li>Creating, uploading, requesting, sharing, or distributing CSAM.</li>
              <li>Sexual exploitation or abuse of children.</li>
              <li>Grooming or attempting to exploit a minor.</li>
              <li>Sexualizing or soliciting minors.</li>
              <li>Child trafficking or other conduct that endangers children.</li>
              <li>Any attempt to use Lovydate to facilitate child exploitation.</li>
            </ul>

            <h2>3. Reporting and Blocking</h2>
            <p>
              Lovydate provides in-app reporting and blocking features.
              Users can report profiles, posts, comments, or behavior that
              raises safety concerns and block accounts they do not wish
              to interact with.
            </p>
            <p>
              Reports are reviewed by the Lovydate administration team.
              Depending on the findings, action may include removing
              content, restricting an account, suspending an account, or
              permanently terminating access.
            </p>

            <h2>4. Review and Enforcement</h2>
            <p>
              Reports involving suspected child sexual abuse or exploitation
              are treated as serious safety concerns. When Lovydate obtains
              actual knowledge of CSAM, the team will take appropriate
              action, including restricting access to and removing the
              material, in accordance with applicable laws and these
              standards.
            </p>
            <p>
              Lovydate will maintain a process for escalating confirmed
              CSAM cases to the relevant national or regional authority,
              as required by applicable child safety laws.
            </p>

            <h2>5. Cooperation with Authorities</h2>
            <p>
              Lovydate will cooperate with relevant child protection
              authorities and law enforcement in accordance with
              applicable laws and valid legal requests concerning child
              safety and exploitation.
            </p>

            <h2>6. Child Safety Contact</h2>
            <p>
              For child safety concerns, suspected underage accounts,
              or potential violations of these standards, contact:
            </p>
            <div className="policy-notice">
              <strong>Lovydate Child Safety Team</strong>
              <br />
              Email:{" "}
              <a href="mailto:support@lovydate.fun">
                support@lovydate.fun
              </a>
              <br />
              Website:{" "}
              <a href="https://lovydate.fun/">
                https://lovydate.fun
              </a>
            </div>
            <p>
              Please include relevant information about your concern.
              Do not send or redistribute suspected CSAM as an email
              attachment.
            </p>

            <h2>7. Policy Updates</h2>
            <p>
              Lovydate may update these standards as our safety practices
              and legal obligations evolve. The latest version will be
              published on this page.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              For questions about these standards or to raise a child
              safety concern, contact Lovydate:
            </p>
            <p>
              <strong>Lovydate Group</strong>
              <br />
              Tulsipur, Dang, Lumbini Province, Nepal
              <br />
              Email:{" "}
              <a href="mailto:support@lovydate.fun">
                support@lovydate.fun
              </a>
              <br />
              Website:{" "}
              <a href="https://lovydate.fun/">
                https://lovydate.fun
              </a>
            </p>

            <footer className="policy-footer">
              © 2026 Lovydate Group. All rights reserved.
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
