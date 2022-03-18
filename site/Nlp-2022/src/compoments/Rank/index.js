import { Table } from "antd";
import { RANK_LABEL, RANK_IS_SORT } from "../../assests/constant";
import rankData from "../../assests/out.json";
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
      title: "textual_cloze",
      dataIndex: "textual_cloze",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.textual_cloze - b.textual_cloze,
          }
        : {}),
    },
    {
      title: "visual_cloze",
      dataIndex: "visual_cloze",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.visual_cloze - b.visual_cloze,
          }
        : {}),
    },
    {
      title: "visual_coherence",
      dataIndex: "visual_coherence",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.visual_coherence - b.visual_coherence,
          }
        : {}),
    },
    {
      title: "visual_ordering",
      dataIndex: "visual_ordering",
      align,
      ...(RANK_IS_SORT
        ? {
            sorter: (a, b) => a.visual_ordering - b.visual_ordering,
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
