import React from "react";

export const metadata = {
  title: "Privacy Policy | Lovydate",
  description:
    "Read Lovydate's Privacy Policy to understand how we collect, use, share, and protect your information, including how to delete your account.",
  alternates: {
    canonical: "https://lovydate.fun/privacy-policy",
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
  .policy-article h3 {
    margin: 20px 0 6px;
    font-size: 16px;
  }
  .policy-article p { margin: 10px 0; }
  .policy-article ul, .policy-article ol {
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

const pageBody = `
<div class="policy-wrap">
  <header class="policy-header">
    <a class="policy-brand" href="https://lovydate.fun/">Lovydate</a>
    <p>Privacy, transparency, and your choices</p>
  </header>

  <main class="policy-main">
    <article class="policy-article">
      <h1>Lovydate Privacy Policy</h1>
      <p class="policy-updated">Last updated: October 29, 2026</p>

      <p>
        Welcome to Lovydate. This Privacy Policy explains what information we
        collect, how we use and share it, how long we keep it, and the choices
        available to you when you use Lovydate.
      </p>

      <p>
        <strong>Who we are:</strong> Lovydate Group, Tulsipur, Dang,
        Lumbini Province, Nepal.
        <br />
        <strong>Privacy contact:</strong>
        <a href="mailto:support@lovydate.fun">support@lovydate.fun</a>
      </p>

      <h2>1. Who Can Use Lovydate</h2>
      <p>
        Lovydate is intended only for people aged 18 or older. We do not
        knowingly permit anyone under 18 to use the service. If we learn that
        an account belongs to someone under 18, we may suspend it and take
        steps to delete the account and associated information. If you believe
        a minor is using Lovydate, please contact
        <a href="mailto:support@lovydate.fun">support@lovydate.fun</a>.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account information:</strong> name, email address, phone
          number, date of birth, and other details you provide when creating
          or managing an account.
        </li>
        <li>
          <strong>Sign-in information:</strong> information associated with
          your email or one-time verification code sign-in, or Google sign-in
          if you choose that option.
        </li>
        <li>
          <strong>Profile information:</strong> photos, bio, interests, gender,
          and other details you choose to add.
        </li>
        <li>
          <strong>Information you choose to share:</strong> this may include
          sensitive details such as sexual orientation or relationship
          preferences. Please share only what you are comfortable providing.
        </li>
        <li>
          <strong>Content and communications:</strong> posts, comments, photos,
          messages, interactions, reports, and messages you send to our support
          team.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Location:</strong> approximate or precise location, where
          supported and permitted by your device and app settings, for
          location-related features such as showing people nearby.
        </li>
        <li>
          <strong>Device and technical information:</strong> device type,
          operating system, language, IP address, app version, and technical
          identifiers where available.
        </li>
        <li>
          <strong>Usage information:</strong> how you use features, interact
          with profiles, match with people, and engage with the app.
        </li>
        <li>
          <strong>Diagnostics:</strong> crash reports, performance information,
          and technical logs used to maintain and improve the service.
        </li>
      </ul>

      <h3>Information from other sources</h3>
      <p>
        We may receive information from sign-in providers when you choose to
        use them, and from other users when they message you or submit a
        report involving your account or content.
      </p>

      <h3>Payments</h3>
      <p>
        If paid purchases or subscriptions are offered through Apple App Store
        or Google Play, those platforms process the transaction under their
        own terms and privacy policies. The information we receive depends on
        the transaction and platform. Do not send full payment card details
        directly to Lovydate support.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>Create, authenticate, and manage your account.</li>
        <li>Display your profile and help suggest potential connections.</li>
        <li>Enable messaging, posts, comments, matches, and other interactions.</li>
        <li>Provide location-related features when you enable them.</li>
        <li>Detect spam, fraud, impersonation, abuse, and suspected underage use.</li>
        <li>Review reports and enforce our terms and community rules.</li>
        <li>Respond to support requests and communicate service-related updates.</li>
        <li>Support purchases or subscriptions if those features are offered.</li>
        <li>Understand app performance and improve existing features.</li>
        <li>Protect the security, rights, and safety of users and Lovydate.</li>
        <li>Meet applicable legal obligations and resolve disputes.</li>
      </ul>
      <p>
        We do not currently serve third-party advertising in the app. If our
        practices change, we will update this policy where appropriate.
      </p>

      <h2>4. Sensitive Information</h2>
      <p>
        Some information you choose to provide, such as sexual orientation or
        relationship preferences, may be sensitive. Location information can
        also be sensitive. Consider carefully what you add to your profile or
        share with other users. You can edit or remove profile information
        through available app controls. We use information in connection with
        operating, securing, and providing the features you use, subject to
        this policy and applicable law.
      </p>

      <h2>5. Posts, Comments, Messages, and Public Content</h2>
      <p>
        Lovydate includes social features such as a feed where users can post,
        comment, and interact. Content you choose to share may be visible to
        other Lovydate users according to the relevant feature and visibility
        settings. Other users may copy, save, or share content they can see.
        We cannot control what other users do with information they have
        accessed, so avoid posting anything you do not want others to see.
      </p>
      <p>
        Messages are intended for the people you send them to, but no online
        communication should be treated as completely risk-free. We may review
        content or account information when necessary to investigate reports,
        enforce our rules, protect users, or meet legal obligations.
      </p>
      <p>
        You can use the available reporting and blocking controls to report
        posts, comments, profiles, or behavior that concerns you. You can
        delete your own posts or comments where the app provides that option.
        When you delete your account, associated content and information are
        removed from active systems as described in Section 9, subject to
        limited exceptions for safety, security, legal obligations, and
        dispute resolution.
      </p>

      <h2>6. Analytics</h2>
      <p>
        Lovydate uses in-house analytics to understand app usage, identify
        technical issues, improve performance, and guide product improvements.
        These analytics are managed by our team. We do not currently use
        third-party advertising analytics to serve personalized ads in the app.
      </p>

      <h2>7. Who We Share Information With</h2>
      <p>We may share information in these circumstances:</p>
      <ul>
        <li>
          <strong>With other users:</strong> profile information, photos, posts,
          and other content you choose to make visible. Messages are available
          to their intended recipients.
        </li>
        <li>
          <strong>With service providers:</strong> companies or providers that
          help us host, operate, secure, support, or deliver the service, such
          as infrastructure, email, and technical service providers. Access
          should be limited to what is needed for their work.
        </li>
        <li>
          <strong>For safety and legal reasons:</strong> where we reasonably
          believe disclosure is necessary to comply with law, respond to valid
          legal processes, investigate abuse, or protect the rights, safety,
          and property of users, the public, or Lovydate.
        </li>
        <li>
          <strong>Business transfers:</strong> if Lovydate is involved in a
          merger, restructuring, acquisition, or asset transfer, information
          may be transferred as part of that transaction, subject to
          appropriate protections and applicable law.
        </li>
        <li>
          <strong>With your direction or consent:</strong> when you ask us to
          share information or otherwise consent to a specific disclosure.
        </li>
      </ul>
      <p>
        We do not sell your personal information for money. We do not currently
        serve third-party ads in the app.
      </p>

      <h2>8. Safety and Moderation</h2>
      <p>
        We may use available technical tools and human review to investigate
        reports, identify spam or suspected fraud, enforce our rules, and
        protect the community. Depending on the circumstances, we may restrict,
        suspend, or remove accounts or content that violate our terms or pose
        safety risks. Users can block and report other users through available
        in-app features.
      </p>

      <h2>9. Account Deletion and Data Retention</h2>
      <div class="policy-notice">
        <strong>How to delete your account:</strong> Open the Lovydate app,
        go to Settings, and use the account deletion option if available.
        If you cannot access that option or need help, email
        <a href="mailto:support@lovydate.fun">support@lovydate.fun</a>
        from your registered email address and request account deletion.
      </div>
      <p>
        When account deletion is completed, your account and associated
        personal information are deleted from our active systems immediately.
        Some information may need to be retained for a limited period where
        necessary for legal obligations, security, fraud prevention, safety
        investigations, enforcement against repeat abuse, or resolving
        disputes.
      </p>
      <p>
        Backup copies, if any, may remain until they are overwritten or removed
        through the applicable backup cycle. Information retained for a
        permitted reason will be protected and used only for that reason for
        as long as it is retained.
      </p>
      <p>
        Uninstalling the app does not itself submit an account deletion
        request. Please use the in-app deletion option or contact support.
      </p>

      <h2>10. Your Choices and Privacy Rights</h2>
      <p>You may be able to:</p>
      <ul>
        <li>Access and edit your profile information in the app.</li>
        <li>Delete your account through the in-app option or by contacting support.</li>
        <li>Control location permissions through your device settings.</li>
        <li>Manage notification permissions through your device settings.</li>
        <li>Request access to, correction of, or deletion of your information.</li>
      </ul>
      <p>
        Depending on where you live and the laws that apply, you may also have
        rights to object to or restrict certain processing, withdraw consent
        where processing relies on consent, request a portable copy of your
        information, or complain to a relevant data protection authority.
      </p>
      <p>
        To submit a privacy request, email
        <a href="mailto:support@lovydate.fun">support@lovydate.fun</a>.
        We may need to verify your identity before responding. We will respond
        within the timeframe required by applicable law.
      </p>

      <h2>11. Additional Information for EU, UK, and EEA Users</h2>
      <p>
        Where applicable law requires a lawful basis for processing, the
        relevant basis may include providing the service you request,
        complying with legal obligations, pursuing legitimate interests such
        as service security and fraud prevention, or obtaining your consent
        where required. The appropriate basis depends on the particular
        processing activity.
      </p>
      <p>
        Information may be processed in countries outside your country of
        residence, including Nepal. Where required by applicable law, we will
        use appropriate safeguards for international transfers. You may
        contact us at
        <a href="mailto:support@lovydate.fun">support@lovydate.fun</a>
        with questions or requests relating to your data protection rights.
      </p>

      <h2>12. Additional Information for California Residents</h2>
      <p>
        If California privacy law applies to you, you may have rights to know
        about, access, correct, or request deletion of certain personal
        information, subject to legal exceptions. Applicable law may also
        provide rights relating to the sale or sharing of personal information
        and the use of certain sensitive personal information.
      </p>
      <p>
        Lovydate does not sell personal information for money and does not
        currently serve third-party advertising in the app. We will not
        unlawfully discriminate against you for exercising privacy rights.
        To submit a request, contact
        <a href="mailto:support@lovydate.fun">support@lovydate.fun</a>.
      </p>

      <h2>13. Security</h2>
      <p>
        We use reasonable technical and organizational measures intended to
        protect information from unauthorized access, loss, misuse, or
        alteration. No method of storage or transmission is completely secure,
        and we cannot guarantee absolute security. Keep your sign-in
        credentials private and be thoughtful about what you share with others.
      </p>

      <h2>14. International Transfers</h2>
      <p>
        Lovydate may process information in countries other than the country
        where you live, including Nepal, depending on where our systems and
        service providers operate. Where required, we take steps intended to
        protect information during such processing and transfers.
      </p>

      <h2>15. Third-Party Links and Services</h2>
      <p>
        Lovydate may link to third-party websites or services, or allow you to
        use external sign-in providers. Those services may have their own
        privacy policies and terms. We encourage you to review them. This
        policy does not govern services that we do not operate.
      </p>

      <h2>16. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy as Lovydate changes. The date at the
        top shows when it was last revised. Where required, we will notify you
        of significant changes through the app, by email, or by another
        appropriate method.
      </p>

      <h2>17. Contact Us</h2>
      <p>
        If you have questions about this policy, want to make a privacy
        request, need help deleting your account, or wish to report a data or
        safety concern, contact us:
      </p>
      <p>
        <strong>Lovydate Group</strong><br />
        Tulsipur, Dang, Lumbini Province, Nepal<br />
        Email: <a href="mailto:support@lovydate.fun">support@lovydate.fun</a><br />
        Website: <a href="https://lovydate.fun/">https://lovydate.fun</a>
      </p>

      <footer class="policy-footer">
        © 2026 Lovydate Group. All rights reserved.
      </footer>
    </article>
  </main>
</div>
`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <style>{pageStyle}</style>
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </>
  );
}
