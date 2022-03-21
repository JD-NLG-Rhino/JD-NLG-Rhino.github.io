export const PROJECT_TITLE = "CEPSUM 2.0"; //  项目标题
export const PROJECT_TITLE_DESC = "JD Multimodal Product Summarization Challenge"; // 项目标题说明文案

export const HEADER_BG_IMG =require('./images/header-bg.png'); // 顶部背景图

export const RANK_LABEL = "Leaderboard"; // 排行榜 label

export const RANK_IS_SORT = false; // 排行榜指标是否支持排序

/**
 * title 标题
 * desc 文本话术
 * downList 下载按钮list  title：标题  url: 地址
 */
export const DESC_LIST = [
  {
    title: "What is CEPSUM?",
    desc: "<p> CEPSUM is a <span><b>C</b>hinese <b>E</b>-commerce <b>P</b>roduct <b>SUM</b>marization </span> dataset that is collected from JD.COM, a mainstream Chinese e-commerce platform. Each sample is a (product textual description, product knowledge base, product image, product summary) tuple. The dataset contains three product categories, including Cases&Bags, Home Appliances, and Clothing. The JD Multimodal Product Summarization Challenge aims at generating a condensed textual summary for a given product.</p>",
    downList: [
      {
        title: "More information is here",
        url: "https://github.com/jd-aig/multimodal-product-summarization-challenge",
      },
    ],
  },
  {
    title: "Reference.",
    downList: [
      {
        title: "[1] Li et. al., Aspect-Aware Multimodal Summarization for Chinese E-Commerce Products. AAAI 2020.",
        url: "https://rajpurkar.github.io/SQuAD-explorer/explore/v2.0/dev/",
      },
      {
        title: "[2] Yuan et. al., On the Faithfulness for E-commerce Product Summarization. COLING 2020.",
        url: "https://rajpurkar.github.io/SQuAD-explorer/explore/v2.0/dev/",
      },
      {
        title: "[3] Xu et. al., Self-Attention Guided Copy Mechanism for Abstractive Summarization. ACL 2020.",
        url: "https://rajpurkar.github.io/SQuAD-explorer/explore/v2.0/dev/",
      },
      {
        title: "[4] Xu et. al., K-PLUG: Knowledge-injected Pre-trained Language Model for Natural Language Understanding and Generation in E-Commerce. Findings of ACL: EMNLP 2021.",
        url: "https://rajpurkar.github.io/SQuAD-explorer/explore/v2.0/dev/",
      },
    ],
  },
  {
    title: "What is CEPSUM?",
    desc: "<p> CEPSUM is a <span><b>C</b>hinese <b>E</b>-commerce <b>P</b>roduct <b>SUM</b>marization </span> dataset that is collected from JD.COM, a mainstream Chinese e-commerce platform. Each sample is a (product textual description, product knowledge base, product image, product summary) tuple. The dataset contains three product categories, including Cases&Bags, Home Appliances, and Clothing. The JD Multimodal Product Summarization Challenge aims at generating a condensed textual summary for a given product.</p>",
    downList: [
      {
        title: "More information is here",
        url: "https://github.com/jd-aig/multimodal-product-summarization-challenge",
      },
    ],
  },
  {
    title: "Have Questions?",
    desc: "<p> Ask us questions in our WeChat group or at lihaoran24(at)jd.com.</p>",
  },
];
