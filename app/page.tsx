"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    const cardData = [
      {
        title: "内外空间关系研究",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "星际自由移动",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "偏蚀",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "万象",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "太阳流水线",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "电影宇宙",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "多样的未来主义",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "远程反射疗法",
        url: "https://via.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "时空之间",
        url: "https://neu.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "栉风沐雨",
        url: "https://neu2.learnwithgpt.beauty/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
    ];

    shuffleArray(cardData);
    setCards(cardData);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started with&nbsp;
          <code className={styles.code}>ChatGPT</code>
        </p>
        <div>
          {/* <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          // target="_blank"
          // rel="noopener noreferrer"
          >
            Supported by DAO{" "}
          </a> */}
          <a style={{ color: "#808080" }}>Supported by DAO </a>
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
        {cards.map((card, index) => (
          <a key={index} href={card.url} className={styles.card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
