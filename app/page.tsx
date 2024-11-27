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
  //       title: "内外空间关系研究",
  //       url: "https://neu1.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "星际自由移动",
  //       url: "https://neu2.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :  80 messages /3 hours",
  //     },
  //     {
  //       title: "偏蚀",
  //       url: "https://neu3.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "万象",
  //       url: "https://neu4.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "太阳流水线",
  //       url: "https://neu5.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "电影宇宙",
  //       url: "https://neu6.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "多样的未来主义",
  //       url: "https://neu7.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "远程反射疗法",
  //       url: "https://neu8.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "时空之间",
  //       url: "https://neu9.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "66号公路",
  //       url: "https://neu10.342707641.xyz/",
  //       description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  // {
  //       title: "走向天空的人",
  //       url: "https://neu11.342707641.xyz/",
  //       description: "Access to GPT-4o mini",
  //     },
  //     {
  //       title: "轨道反射器",
  //       url: "https://neu12.342707641.xyz/",
  //       description: " Access to GPT-4o mini",
  //     },
  //           {
  //       title: "洞穴之喻",
  //       url: "https://neu13.342707641.xyz/",
  //       description: " Access to GPT-4o mini",
  //     },
  //     {
  //       title: "时钟总是错的",
  //       url: "https://neu14.342707641.xyz/",
  //       description: " Access to GPT-4o mini",
  //     },
  //     {
  //       title: "二分之一个月亮",
  //       url: "https://neu15.342707641.xyz/",
  //       description: " Access to GPT-4o mini",
  //     },
  //     {
  //       title: "关于无的无所有",
  //       url: "https://neu16.342707641.xyz/",
  //       description: " Access to GPT-4o mini",
  //     },
  //       {
  //       title: "与……对话",
  //       url: "https://neu17.342707641.xyz/",
  //       description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "午夜时刻",
  //       url: "https://neu18.342707641.xyz/",
  //       description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //          {
  //       title: "行走的花",
  //       url: "https://neu19.342707641.xyz/",
  //       description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
  //     {
  //       title: "至上主义",
  //       url: "https://neu20.342707641.xyz/",
  //       description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
  //     },
      //   {
      //   title: "巴别塔",
      //   url: "https://neu21.342707641.xyz/",
      //   description: " Access to GPT-4o mini",
      // },
      //      {
        title: "仁",
        url: "https://31.learnwithgpt.space",
        description: " Basic Account, access to claude-sonnet",
      },     
      {
        title: "义",
        url: "https://32.learnwithgpt.space",
        description: " Basic Account, access to claude-sonnet",
      },
       {
        title: "礼",
        url: "https://33.learnwithgpt.space",
        description: " Basic Account, access to claude-haiku",
      },
       {
        title: "智",
        url: "https://34.learnwithgpt.space",
        description: " Basic Account, access to claude-haiku",
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
          <code className={styles.code}>Claude</code>
        </p>
        <div></div>
{/*           <a
          href="https://claude.learnwithgpt.space"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#d19b75", textDecoration: "none" }}
        >
          体验Claude
        </a> */}
       <a style={{ color: "#808080" }}>Supported by DAO  </a>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/claude.svg"
          alt="Next.js Logo"
          width={140}
          height={140}
          priority
        />
      </div>
       <div className={styles.center}>
{/* <p className={styles.tip}> */}
<p>
 <a >因不可抗力，未来不得不转向claude共享账号 </a>
  </p>
  </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <a key={index} href={card.url} className={styles.card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </a>
        ))}
      </div>

      <div>
        <p className={styles.tip}>
           <a >天下没有不散的宴席，ChatGPT再见👋 </a>
           <p className={styles.spacer}></p>
        </p>
      </div>

    </main>
  );
}
