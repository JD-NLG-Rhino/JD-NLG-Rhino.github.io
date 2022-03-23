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

export const tranferRankList = (rankData) => {
  const { leaderboard = [] } = rankData;
  const rankList = leaderboard;
  console.log(rankList, "ranklist");
  return rankList.map((item, index) => {
    const { created } = item;
    return {
      ...item,
      rank: index + 1,
      updateTime: new Date(created).toLocaleDateString(),
    };
  });
};

export const align = "center";

export const pcMarkColumns = [
  {
    title: "Category",
    dataIndex: "Category",
    align,
    width: 160,
    render: (text, record) => {
      return (
        <div>
          <div>Cases&Bags</div>
          <div>Home Appliances</div>
          <div>Cloothing</div>
        </div>
      );
    },
  },
  {
    title: "ROUGE-1",
    dataIndex: "ROUGE-1",
    align,
    render: (text, record) => {
      return (
        <div>
          <div>{record?.cases_bags?.scores["ROUGE-1"] || EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores["ROUGE-1"] || EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores["ROUGE-1"] || EMPTY_TEXT}</div>
        </div>
      );
    },
  },
  {
    title: "ROUGE-2",
    dataIndex: "ROUGE-2",
    align,
    render: (text, record) => {
      return (
        <div>
          <div>{record?.cases_bags?.scores["ROUGE-2"] || EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores["ROUGE-2"] || EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores["ROUGE-2"] || EMPTY_TEXT}</div>
        </div>
      );
    },
  },
  {
    title: "ROUGE-L",
    dataIndex: "ROUGE-L",
    align,
    render: (text, record) => {
      return (
        <div>
          <div>{record?.cases_bags?.scores["ROUGE-L"] || EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores["ROUGE-L"] || EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores["ROUGE-L"] || EMPTY_TEXT}</div>
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
            <div>{record?.cases_bags?.scores["ROUGE-1"] || EMPTY_TEXT}</div>
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
            <div>{record?.cases_bags?.scores["ROUGE-2"] || EMPTY_TEXT}</div>
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
            <div>{record?.cases_bags?.scores["ROUGE-L"] || EMPTY_TEXT}</div>
          );
        },
      },
    ],
  },
  {
    title: "Home Appliances",
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
    title: "Cloothing",
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
