export const metadata = {
  title: "Delete Your Account | Lovydate",
  description: "How to delete your Lovydate account and associated personal data.",
};

const pageStyle = "\n:root{color-scheme:light;--ink:#202124;--muted:#62666c;--line:#e6e8ec;--accent:#bd365d;--bg:#f7f7f9;--paper:#fff}\n*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.7 system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif}\nmain{max-width:760px;margin:60px auto;padding:0 18px}article{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:clamp(22px,5vw,42px)}\n.brand{font-weight:800;letter-spacing:.08em;color:var(--accent)}h1{font-size:clamp(2rem,5vw,2.7rem);line-height:1.15}a{color:#a72c50}li{margin:.5rem 0}footer{text-align:center;color:var(--muted);padding:24px}\n";
const pageBody = "\u003cmain\u003e\u003carticle\u003e\n\u003cdiv class=\"brand\"\u003eLOVYDATE\u003c/div\u003e\n\u003ch1\u003eDelete Your Lovydate Account\u003c/h1\u003e\n\u003cp\u003eYou can delete your Lovydate account from the account settings in the app. Account deletion removes your account and associated personal data from our active systems when the deletion is completed.\u003c/p\u003e\n\u003ch2\u003eRequest deletion by email\u003c/h2\u003e\n\u003cp\u003eIf you cannot access the app, email \u003ca href=\"mailto:support@lovydate.fun?subject=Lovydate%20account%20deletion\"\u003esupport@lovydate.fun\u003c/a\u003e with the subject \u003cstrong\u003eâ€œLovydate Account Deletion Requestâ€\u003c/strong\u003e.\u003c/p\u003e\n\u003cp\u003eFor your safety, send the request from the email address associated with your Lovydate account where possible. We may ask for reasonable information to verify that you own the account. Do not send your password.\u003c/p\u003e\n\u003ch2\u003eWhat happens to your data?\u003c/h2\u003e\n\u003cp\u003eWhen deletion is completed, we delete your account and associated personal data from active systems immediately. Limited information may remain temporarily in backups before they are overwritten, or may be retained where required by law or reasonably necessary for security, fraud prevention, legal claims, or enforcement of our rules. Any retained information is limited to those purposes and deleted when no longer needed.\u003c/p\u003e\n\u003cp\u003ePrivacy questions: \u003ca href=\"mailto:support@lovydate.fun\"\u003esupport@lovydate.fun\u003c/a\u003e.\u003c/p\u003e\n\u003cp\u003e\u003ca href=\"https://lovydate.fun/\"\u003eReturn to Lovydate\u003c/a\u003e\u003c/p\u003e\n\u003c/article\u003e\u003c/main\u003e\u003cfooter\u003eÂ© 2026 Lovydate\u003c/footer\u003e";

export default function Page() {
  return (
    <>
      <style>{pageStyle}</style>
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </>
  );
}
