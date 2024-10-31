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
        url: "https://neu1.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "星际自由移动",
        url: "https://neu2.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :  80 messages /3 hours",
      },
      {
        title: "偏蚀",
        url: "https://neu3.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "万象",
        url: "https://neu4.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "太阳流水线",
        url: "https://neu5.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "电影宇宙",
        url: "https://neu6.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "多样的未来主义",
        url: "https://neu7.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "远程反射疗法",
        url: "https://neu8.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "时空之间",
        url: "https://neu9.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "66号公路(x)",
        url: "https://neu10.342707641.xyz/",
        description: "Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
  {
        title: "走向天空的人",
        url: "https://neu11.342707641.xyz/",
        description: "Access to GPT-4o mini",
      },
      {
        title: "轨道反射器",
        url: "https://neu12.342707641.xyz/",
        description: " Access to GPT-4o mini",
      },
            {
        title: "洞穴之喻",
        url: "https://neu13.342707641.xyz/",
        description: " Access to GPT-4o mini",
      },
      {
        title: "时钟总是错的",
        url: "https://neu14.342707641.xyz/",
        description: " Access to GPT-4o mini",
      },
      {
        title: "二分之一个月亮",
        url: "https://neu15.342707641.xyz/",
        description: " Access to GPT-4o mini",
      },
      {
        title: "关于无的无所有",
        url: "https://neu16.342707641.xyz/",
        description: " Access to GPT-4o mini",
      },
        {
        title: "与……对话",
        url: "https://neu17.342707641.xyz/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "午夜时刻",
        url: "https://neu18.342707641.xyz/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
           {
        title: "行走的花",
        url: "https://neu19.342707641.xyz/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      {
        title: "至上主义",
        url: "https://neu20.342707641.xyz/",
        description: " Access to GPT-4o\nrate limit :80 messages /3 hours",
      },
      //   {
      //   title: "巴别塔",
      //   url: "https://neu21.342707641.xyz/",
      //   description: " Access to GPT-4o mini",
      // },
      //      {
      //   title: "a",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-ohYtptgfDmYvgAWe87lmG4RjuLnGl8RGaIqyNSBVkVU",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },     
      // {
      //   title: "b",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-YYIPTjPtiWqfPuNb9W4Eg_tXNQbPB6FaVO2MHdchEP8",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //  {
      //   title: "c",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-41fHogv7YygH6Z56aZo2Hjm4ENYmxlePP1EBj4env9E",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //  {
      //   title: "d",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-LzVGG_N0nT17t2qcaAp1JkUP20r-Z1rnVrp7iLWdD2w",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //  {
      //   title: "e",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-_gka-hmFHq1rIdLqUpmXqSpckvO3lGhkB1ljD1jct-8",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //  {
      //   title: "f",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-Anwc7XwquvMLn1YYuxx0lE835b_28kWYUljiZS6GCik",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //   {
      //   title: "g",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-gLx0zrVofaphvr3IKLa1OPDfvauQ0JJGQZii_wZOkRE",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //   {
      //   title: "h",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-M5DNpXzabg9IucLJOPDBq2_IwXoEI9dSG35EEiU71ts",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //    {
      //   title: "i",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-LOljQkB4_snkRsFy_aPg1TLcgBhOq3Rbl-hG3w98-t4",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      //    {
      //   title: "j",
      //   url: "https://plus.aivvm.com/auth/login_share?token=fk-_agXB8e-5VeGCjBy03icL-Fvu45aVpv2IhMhYOpTNHU",
      //   description: " Access to GPT-4o\nrate limit :80 messages /3 hours（无对话历史记录",
      // },
      
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
          src="/next.svg"
          alt="Next.js Logo"
          width={140}
          height={140}
          priority
        />
      </div>
       <div className={styles.center}>
{/* <p className={styles.tip}> */}
<p>
{/*  <a style={{ color: "#FF0000" }}>OpenAI风控严重，11月初恢复 </a> */}
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
          tips：显示未找到share_token，可以尝试刷新页面重进或更换国内网络；进入页面后加载不出来，是之前用的次数太多导致被封，尽量使用空闲的账号；如果某个账号无法使用，可以换一个用；对话内容可能会受到审查，请不要问不文明的问题，谢谢
           <p className={styles.spacer}></p>
        </p>
      </div>

    </main>
  );
}
