import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ChatGPT节点</h1>

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
