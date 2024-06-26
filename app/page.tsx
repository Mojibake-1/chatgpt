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
        url: "https://neu.learnwithgpt.space",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "星际自由移动",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :  80 messages /3 hours",
      },
      {
        title: "偏蚀",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "万象",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "太阳流水线",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "电影宇宙",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "多样的未来主义",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "远程反射疗法",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "时空之间",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "栉风沐雨",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "走向天空的人",
        url: "https://neu.learnwithgpt.space/",
        description: "Access to GPT-3.5",
      },
      {
        title: "轨道反射器",
        url: "https://neu.learnwithgpt.space/",
        description: " Access to GPT-3.5",
      },
      {
        title: "洞穴之喻",
        url: "https://neu.learnwithgpt.space/",
        description: " Access to GPT-3.5",
      },
      {
        title: "时钟总是错的",
        url: "https://neu.learnwithgpt.space/",
        description: " Access to GPT-3.5",
      },
      {
        title: "二分之一个月亮",
        url: "https://neu.learnwithgpt.space/",
        description: " Access to GPT-3.5",
      },
      {
        title: "关于无的无所有",
        url: "https://neu.learnwithgpt.space/",
        description: " Access to GPT-3.5",
      },
            {
        title: "与……对话",
        url: "https://neu17.learnwithgpt.space/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "午夜时刻",
        url: "https://neu18.learnwithgpt.space/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "信仰、希望、爱",
        url: "https://neu19.learnwithgpt.space/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "至上主义",
        url: "https://neu20.learnwithgpt.space/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
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
        <div></div>
        <a style={{ color: "#808080" }}>Supported by DAO  </a>
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
       <div className={styles.center}>
<p className={styles.tip}>
  下方有注意事项
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
             
          tips：每次页面刷新会打乱排序，请记住之前使用的账号名称。如果某个账号无法使用，可以换一个用。显示未找到share_token，需更换国内网络。对话内容可能会受到审查，请不要问不文明的问题
           <p className={styles.spacer}></p>
        </p>
      </div>
      
    </main>
  );
}
