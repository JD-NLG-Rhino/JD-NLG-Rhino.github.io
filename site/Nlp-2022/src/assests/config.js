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
    title: <b>What is CEPSUM 2.0?</b>,
    desc: "<p> CEPSUM is a <span><b>C</b>hinese <b>E</b>-commerce <b>P</b>roduct <b>SUM</b>marization </span> dataset that is collected from JD.COM, a mainstream Chinese e-commerce platform,which aims at developing a summarizer to generate a condensed textual summary for a given product. Each sample in CEPSUM 2.0 is a (product textual description, product knowledge base, product image, product summary) tuple, where the product knowledge base is a new feature beyond CEPSUM. The dataset contains three product categories, including Cases&Bags, Home Appliances, and Clothing. More information can be found in our CEPSUM paper.</p>",
    downList: [
      {
        title: "CEPSUM paper",
        url: "https://ojs.aaai.org/index.php/AAAI/article/view/6332",
      },
    ],
  },
  {
    title: <b>Getting the Data</b>,
    desc: "<p> If you are interested in our challenge, please fill out the application form and email lihaoran24 (AT) jd.com (Please note that you participate in the challenge). The dataset will be sent to you.</p>",
    downList: [
      {
        title: "Data Application Form",
        url: "https://nlp-object-store.s3.cn-north-1.jdcloud-oss.com/multimodal-product-summarization-challenge/Application_terms.docx",
      },
    ],
  },
  {
    title: <b>Baselines</b>,
    desc: "<p> We offer baseline models to help you get a quick-start on this challenge. K-PLUG is a Transformer-based seq2seq model that is pre-trained on a large-scale e-commerce corpus. The multimodal version of K-PLUG is also provided.</p>",
    downList: [
      {
        title: "K-PLUG",
        url: "https://github.com/xu-song/k-plug",
      },
      {
        title: "Multimodal K-PLUG",
        url: "https://github.com/WaveLi123/m-kplug",
      },
    ],
  },
  {
    title: <b>Evaluations</b>,
    desc: "<p> We compute the average score of ROUGE-1, ROUGE-2, and ROUGE-L metrics with ROUGE-1.5.5 toolkits, over three product categories. Please submit your model to get the results on the test set according to the following instructions.</p>",
    downList: [
      {
        title: "Submission Instructions",
        url: "",
      },
    ],
  },
  {
    title: <b>References</b>,
    desc: "<p> [1] Li et. al., Aspect-Aware Multimodal Summarization for Chinese E-Commerce Products. AAAI 2020.</p><p>[2] Yuan et. al., On the Faithfulness for E-commerce Product Summarization. COLING 2020.</p><p>[3] Xu et. al., Self-Attention Guided Copy Mechanism for Abstractive Summarization. ACL 2020.</p><p>[4] Xu et. al., K-PLUG: Knowledge-injected Pre-trained Language Model for Natural Language Understanding and Generation in E-Commerce. Findings of ACL: EMNLP 2021.</p>",
  },
  {
    title: <b>Have Questions?</b>,
    desc: "<p> Ask us questions in our WeChat group or at lihaoran24(AT)jd.com.</p>",
  },
];
