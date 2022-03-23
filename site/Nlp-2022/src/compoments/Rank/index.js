import { Table } from "antd";
import { RANK_LABEL, RANK_IS_SORT } from "../../assests/config";
import rankData from "../../assests/rank.json";
import { tranferRankList,EMPTY_TEXT } from "./util";
import "./index.scss";
import { useEffect,useState } from "react";

const getTableColumns = (isPhone) => {
  const align = "center";
  return [
    {
      title: "Rank",
      dataIndex: "rank",
      align,
      fixed:isPhone?'left':false,
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
      fixed:isPhone?'left':false,
      width:isPhone?0:260,
      render:(text,record)=>{
        return <div>
          <div>{record.description}</div>
          <div>{record.organization}</div>
        </div>
      }
    },
    {
      title: "Category",
      dataIndex: "Category",
      align,
      width:160,
      render:(text,record)=>{
        return <div>
          <div>Cases&Bags</div>
          <div>Home Appliances</div>
          <div>Cloothing</div>
        </div>
      }
    },
    {
      title: "ROUGE-1",
      dataIndex: "ROUGE-1",
      align,
      render:(text,record)=>{
        return <div>
          <div>{record?.cases_bags?.scores['ROUGE-1']||EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores['ROUGE-1']||EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores['ROUGE-1']||EMPTY_TEXT}</div>
        </div>
      }
    },
    {
      title: "ROUGE-2",
      dataIndex: "ROUGE-2",
      align,
      render:(text,record)=>{
        return <div>
           <div>{record?.cases_bags?.scores['ROUGE-2']||EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores['ROUGE-2']||EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores['ROUGE-2']||EMPTY_TEXT}</div>
        </div>
      }
    },
    {
      title: "ROUGE-L",
      dataIndex: "ROUGE-L",
      align,
      render:(text,record)=>{
        return <div>
           <div>{record?.cases_bags?.scores['ROUGE-L']||EMPTY_TEXT}</div>
          <div>{record?.home_appliances?.scores['ROUGE-L']||EMPTY_TEXT}</div>
          <div>{record?.clothing?.scores['ROUGE-L']||EMPTY_TEXT}</div>
        </div>
      }
    },
  
    {
      title: "AVG",
      dataIndex: "score_avg",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.score_avg - b.score_avg,
          }
        : {}),
    },
  ];
};

const Rank = () => {
  const [isPhone,setIsPhone]=useState(false)
  useEffect(()=>{
    if(window.screen.width<1000){
      setIsPhone(true)
    }
  },[])
  return (
    <div className="rank">
      <div className="title">{RANK_LABEL}</div>
      <div className="table">
        <Table
         scroll={{ x:isPhone?1000: 0 }}
          columns={getTableColumns(isPhone)}
          dataSource={tranferRankList(rankData)}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default Rank;
