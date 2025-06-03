import Link from "next/link";

const lastUpdated = "June 2025";

export default function Page() {
  return (
    <article className="prose mt-8 pb-16 dark:prose-invert">
      <div className="space-y-4">
        <h1 className="title text-5xl">privacy policy.</h1>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div className="space-y-4">
        <h2 className="title text-3xl">Hey, Welcome!</h2>
        <p>
          Thanks for stopping by! This <b>Privacy Policy</b> explains how I
          handle any information shared on this site. My goal is to keep things
          simple and respectful.
        </p>

        <h2 className="title">What Information I Collect</h2>
        <p>
          This is mainly a portfolio website, so I don’t collect personal info
          unless you choose to share it. There are:
        </p>
        <ul>
          <li>No account registrations</li>
          <li>No tracking cookies</li>
          <li>No hidden data collection</li>
        </ul>

        <h3>1. Contact Info</h3>
        <p>
          If you contact me through the form or directly via email, any
          information you provide (like your name or email) is used solely to
          reply to you. That’s it—no weird stuff.
        </p>

        <h2 className="title">How I Use Your Info</h2>
        <p>If you do reach out, here&#39;s how your info might be used:</p>
        <ul>
          <li>To reply to your message</li>
          <li>To improve the website if you give feedback</li>
        </ul>

        <h2 className="title">I Don&#39;t Share Your Info</h2>
        <p>
          I don’t sell, rent, or share your information with anyone. If you sent
          something sensitive and want it removed, just let me know and I’ll
          handle it.
        </p>

        <h2 className="title">Security</h2>
        <p>
          I do my best to keep your data safe. While no system is perfect, I
          take reasonable precautions to protect anything you send.
        </p>

        <h2 className="title">Policy Updates</h2>
        <p>
          This policy was last updated on <b>{lastUpdated}</b>. If I ever make
          changes, I’ll update this page so you&#39;re always in the know.
        </p>

        <h2 className="title">Questions?</h2>
        <p>
          Feel free to reach out to me at{" "}
          <Link href="mailto:aldrenbagual17@gmail.com">
            aldrenbagual17@gmail.com
          </Link>{" "}
          or through the <Link href="/contact">contact form</Link>. I&#39;d be
          happy to hear from you!
        </p>
      </div>
    </article>
  );
}
