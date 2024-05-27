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
            Supported by DAO{" "}
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
          <h2>内外空间关系研究</h2>
          <p>
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>星际自由移动</h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>偏蚀 </h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>万象 </h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>太阳流水线 </h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>电影宇宙</h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>多样的未来主义</h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://via.learnwithgpt.beauty/" className={styles.card}>
          <h2>远程反射疗法</h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://neu.learnwithgpt.beauty/" className={styles.card}>
          <h2>时空之间</h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>

        <a href="https://neu2.learnwithgpt.beauty/" className={styles.card}>
          <h2>栉风沐雨</h2>
          <p>
            {" "}
            Access to GPT-4o
            <br />
            rate limit :80 messages /3 hours
          </p>
        </a>
      </div>
    </main>
  );
}
