import React from "react";

const Grid = ({ tick, total, rows, cols, cells }) => {
  const Cell = ({ cell }) => {
    const { char } = cell;
    const getImg = () => {
      if (char === "S") return "S.png";
      if (char === "s") return "SX.png";
      if (char === "C") return "C.png";
      if (char === "c") return "CX.png";
      if (char === "#") return "W.png";
      if (char === "X") return "X.png";
      return "free.png";
    };

    const img = getImg();

    return (
      <td
        style={{
          display: "inline-block",
          width: "1.5rem",
          height: "1.5rem",
          margin: "1px",
        }}
      >
        <img
          src={img}
          alt="img"
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
      </td>
    );
  };

  const Rows = () => {
    if (!cells.length) return null;

    const rows_arr = [];

    for (let i = 0; i < rows; i++) {
      const cols_arr = [];
      for (let j = 0; j < cols; j++) {
        const cell = cells.find((c) => c.x === j && c.y === i);
        cols_arr.push(<Cell cell={cell} />);
      }
      rows_arr.push(<tr>{cols_arr}</tr>);
    }

    return rows_arr;
  };

  return (
    <table cellSpacing="0" id="table">
      <tbody>
        <Rows />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            {tick}/{total}
          </p>
        </div>
      </tbody>
    </table>
  );
};

export default Grid;
