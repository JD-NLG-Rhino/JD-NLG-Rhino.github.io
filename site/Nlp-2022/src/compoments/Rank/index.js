import { Table } from "antd";
import { RANK_LABEL, RANK_IS_SORT } from "../../assests/config";
import rankData from "../../assests/rank.json";
import {tranferRankList} from './util'
import "./index.scss";

const getTableColumns = () => {
  const align='center'
  return [
    {
      title: "Rank",
      dataIndex: "rank",
      align,
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
      // width:300
    },
    {
      title: "ROUGE-1",
      dataIndex: "ROUGE1",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.ROUGE1 - b.ROUGE1,
          }
        : {}),
    },
    {
      title: "ROUGE-2",
      dataIndex: "ROUGE2",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.ROUGE2 - b.ROUGE2,
          }
        : {}),
    },
    {
      title: "ROUGE-L",
      dataIndex: "ROUGEL",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.ROUGEL - b.ROUGEL,
          }
        : {}),
    },
    {
      title: "ROUGE-AVG",
      dataIndex: "ROUGEAVG",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.ROUGEAVG - b.ROUGEAVG,
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
          columns={getTableColumns()}
          dataSource={tranferRankList(rankData)}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default Rank;
