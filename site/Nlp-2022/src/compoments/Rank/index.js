import { Table } from "antd";
import { RANK_LABEL, RANK_IS_SORT,phoneFixedCloums } from "../../assests/config";
import rankData from "../../assests/rank.json";
import { tranferRankList,align,phoneMarkColumns,pcMarkColumns} from "./util";
import { useEffect,useState } from "react";
import "./index.scss";

const getTableColumns = (isPhone) => {
  let markColumns=phoneMarkColumns
  if(!isPhone){
    markColumns=pcMarkColumns
  }
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
    ...markColumns,
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
    if(window.screen.width<1000&&phoneFixedCloums){
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
