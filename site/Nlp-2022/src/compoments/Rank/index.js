import { Table } from "antd";
import { RANK_LABEL, RANK_IS_SORT } from "../../assests/config";
import rankData from "../../assests/rank.json";
import { tranferRankList,EMPTY_TEXT } from "./util";
import "./index.scss";

const getTableColumns = () => {
  const align = "center";
  return [
    {
      title: "Rank",
      dataIndex: "rank",
      align,
      fixed: 'left',
      render: (text, record) => {
        return (
          <>
            <strong>{text}</strong>
            <div className="update-time">{record.updateTime}</div>
          </>
        );
      },
    },
    {
      title: "Model",
      dataIndex: "model",
      align,
      fixed: 'left',
      render:(text,record)=>{
        return <div>
          <div>{record.description}</div>
          <div>{record.organization}</div>
        </div>
      }
    },
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
          render:(text,record)=>{
            return <div>{record?.cases_bags?.scores['ROUGE-1']||EMPTY_TEXT}</div>
          }
        },
        {
          title: "R2",
          dataIndex: "cases_bags_R2",
          key: "cases_bags_R2",
          align,
          render:(text,record)=>{
            return <div>{record?.cases_bags?.scores['ROUGE-2']||EMPTY_TEXT}</div>
          }
        },
        {
          title: "R3",
          dataIndex: "cases_bags_R3",
          key: "cases_bags_R3",
          align,
          render:(text,record)=>{
            return <div>{record?.cases_bags?.scores['ROUGE-L']||EMPTY_TEXT}</div>
          }
        },
      ],
    },
    {
      title: "Home Appliances",
      dataIndex: "home_appliances",
      align,
      children:[
        {
          title: "R1",
          dataIndex: "home_appliances_R1",
          key: "home_appliances_R1",
          align,
          render:(text,record)=>{
            return <div>{record?.home_appliances?.scores['ROUGE-1']||EMPTY_TEXT}</div>
          }
        },
        {
          title: "R2",
          dataIndex: "home_appliances_R2",
          key: "home_appliances_R2",
          align,
          render:(text,record)=>{
            return <div>{record?.home_appliances?.scores['ROUGE-2']||EMPTY_TEXT}</div>
          }
        },
        {
          title: "R3",
          dataIndex: "home_appliances_R3",
          key: "home_appliances_R3",
          align,
          render:(text,record)=>{
            return <div>{record?.home_appliances?.scores['ROUGE-L']||EMPTY_TEXT}</div>
          }
        },
      ],
    },
    {
      title: "Cloothing",
      dataIndex: "clothing",
      align,
      children:[
        {
          title: "R1",
          dataIndex: "clothing_R1",
          key: "clothing_R1",
          align,
          render:(text,record)=>{
            return <div>{record?.clothing?.scores['ROUGE-1']||EMPTY_TEXT}</div>
          }
        },
        {
          title: "R2",
          dataIndex: "clothing_R2",
          key: "clothing_R2",
          align,
          render:(text,record)=>{
            return <div>{record?.clothing?.scores['ROUGE-2']||EMPTY_TEXT}</div>
          }
        },
        {
          title: "R3",
          dataIndex: "clothing_R3",
          key: "clothing_R3",
          align,
          render:(text,record)=>{
            return <div>{record?.clothing?.scores['ROUGE-L']||EMPTY_TEXT}</div>
          }
        },
      ],
    },
    {
      title: "AVG",
      dataIndex: "score_avg",
      align,
      fixed:"right",
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.score_avg - b.score_avg,
          }
        : {}),
    },
  ];
};

const Rank = () => {
  return (
    <div className="rank">
      <div className="title">{RANK_LABEL}</div>
      <div className="table">
        <Table
         scroll={{ x: 1500 }}
          columns={getTableColumns()}
          dataSource={tranferRankList(rankData)}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default Rank;
