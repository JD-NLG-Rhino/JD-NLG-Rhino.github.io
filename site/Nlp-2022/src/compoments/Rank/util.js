/**
 * rank 排行名次
 * updateTime 更新时间
 * model
 * ROUGE1
 * ROUGE2
 * ROUGEAVG
 * ROUGEL
 */

export const EMPTY_TEXT = "-";

// 数据指标保留2位小数
export const FIX_NUMBER = 2

export const tranferRankList = (rankData) => {
  const { leaderboard = [] } = rankData;
  const rankList = leaderboard;
  console.log(rankList, "ranklist");
  return rankList.map((item, index) => {
    const { created } = item;
    return {
      ...item,
      rank: index + 1,
      updateTime: new Date(created * 1000).toLocaleDateString(),
    };
  });
};

export const align = "center";

export const pcMarkColumns = [
  {
    title: "Category",
    dataIndex: "Category",
    align,
    width: 120,
    render: (text, record) => {
      return (
        <div style={{ width: '120px' }}>
          <div>Cases&Bags</div>
          <div>HomeAppliances</div>
          <div>Clothing</div>
        </div>
      );
    },
  },
  {
    title: "RG-1",
    dataIndex: "ROUGE-1",
    align,
    render: (text, record) => {
      return (
        <div>
          <div>{record?.cases_bags?.scores["ROUGE-1"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores["ROUGE-1"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores["ROUGE-1"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
        </div>
      );
    },
  },
  {
    title: "RG-2",
    dataIndex: "ROUGE-2",
    align,
    render: (text, record) => {
      return (
        <div>
          <div>{record?.cases_bags?.scores["ROUGE-2"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores["ROUGE-2"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores["ROUGE-2"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
        </div>
      );
    },
  },
  {
    title: "RG-L",
    dataIndex: "ROUGE-L",
    align,
    render: (text, record) => {
      return (
        <div>
          <div>{record?.cases_bags?.scores["ROUGE-L"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores["ROUGE-L"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores["ROUGE-L"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
        </div>
      );
    },
  },
];
export const phoneMarkColumns = [
  {
    title: "Cases&Bags",
    dataIndex: "cases_bags",
    align,
    children: [
      {
        title: "R1",
        dataIndex: "cases_bags_R1",
        key: "cases_bags_R1",
        align,
        render: (text, record) => {
          return (
            <div>{record?.cases_bags?.scores["ROUGE-1"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          );
        },
      },
      {
        title: "R2",
        dataIndex: "cases_bags_R2",
        key: "cases_bags_R2",
        align,
        render: (text, record) => {
          return (
            <div>{record?.cases_bags?.scores["ROUGE-2"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          );
        },
      },
      {
        title: "R3",
        dataIndex: "cases_bags_R3",
        key: "cases_bags_R3",
        align,
        render: (text, record) => {
          return (
            <div>{record?.cases_bags?.scores["ROUGE-L"].toFixed(FIX_NUMBER) || EMPTY_TEXT}</div>
          );
        },
      },
    ],
  },
  {
    title: "HomeAppliances",
    dataIndex: "home_appliances",
    align,
    children: [
      {
        title: "R1",
        dataIndex: "home_appliances_R1",
        key: "home_appliances_R1",
        align,
        render: (text, record) => {
          return (
            <div>
              {record?.home_appliances?.scores["ROUGE-1"] || EMPTY_TEXT}
            </div>
          );
        },
      },
      {
        title: "R2",
        dataIndex: "home_appliances_R2",
        key: "home_appliances_R2",
        align,
        render: (text, record) => {
          return (
            <div>
              {record?.home_appliances?.scores["ROUGE-2"] || EMPTY_TEXT}
            </div>
          );
        },
      },
      {
        title: "R3",
        dataIndex: "home_appliances_R3",
        key: "home_appliances_R3",
        align,
        render: (text, record) => {
          return (
            <div>
              {record?.home_appliances?.scores["ROUGE-L"] || EMPTY_TEXT}
            </div>
          );
        },
      },
    ],
  },
  {
    title: "Clothing",
    dataIndex: "clothing",
    align,
    children: [
      {
        title: "R1",
        dataIndex: "clothing_R1",
        key: "clothing_R1",
        align,
        render: (text, record) => {
          return <div>{record?.clothing?.scores["ROUGE-1"] || EMPTY_TEXT}</div>;
        },
      },
      {
        title: "R2",
        dataIndex: "clothing_R2",
        key: "clothing_R2",
        align,
        render: (text, record) => {
          return <div>{record?.clothing?.scores["ROUGE-2"] || EMPTY_TEXT}</div>;
        },
      },
      {
        title: "R3",
        dataIndex: "clothing_R3",
        key: "clothing_R3",
        align,
        render: (text, record) => {
          return <div>{record?.clothing?.scores["ROUGE-L"] || EMPTY_TEXT}</div>;
        },
      },
    ],
  },
];
