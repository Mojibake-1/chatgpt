import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started with&nbsp;
          <code className={styles.code}>ChatGPT</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supported by<code style={{ color: "#212226" }}>DAO</code>{" "}
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={140}
          height={140}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>Plus &rarr;</h2>
          <p>
            Access to GPT-4
            <br />
            rate limit :40 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>Plus &rarr;</h2>
          <p>
            {" "}
            Access to GPT-4
            <br />
            rate limit :40 messages /3 hours
          </p>
        </a>

        <a href="https://neu.learnwithgpt.beauty/" className={styles.card}>
          <h2>Team1 &rarr;</h2>
          <p>
            {" "}
            Access to GPT-4
            <br />
            rate limit :100 messages /3 hours
          </p>
        </a>

        <a href="https://neu2.learnwithgpt.beauty/" className={styles.card}>
          <h2>Team2 &rarr;</h2>
          <p>
            {" "}
            Access to GPT-4
            <br />
            rate limit :100 messages /3 hours
          </p>
        </a>
      </div>
    </main>
  );
}
