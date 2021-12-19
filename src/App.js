import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import { readFile } from "./readFile";
import { handleFile } from "./program/main";

const App = () => {
  const [map, setMap] = useState(readFile());
  const [mapOriginal, setMapOriginal] = useState();

  const [inputText, setInputText] = useState("");
  const [plan, setPlan] = useState([]);

  const [tick, setTick] = useState(0);
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const arr = inputText.split(",").map((e) => e.trim());
    setPlan(arr);
    console.log("arr", arr);
  }, [inputText]);

  const getSokoban = (config) => {
    for (let i = 0; i < config.cells.length; i++) {
      const c = config.cells[i];
      if (c.char === "S" || c.char === "s") {
        return c;
      }
    }
    return undefined;
  };

  const animateMove = (action, newConfig) => {
    const sokoban = getSokoban(newConfig);
    const old_x = sokoban.x;
    const old_y = sokoban.y;
    const d = action;
    const new_x = old_x + directions[d].x;
    const new_y = old_y + directions[d].y;
    newConfig.cells = newConfig.cells.map((c) => {
      // old
      if (c.x === old_x && c.y === old_y) {
        return {
          ...c,
          char: sokoban.char === "S" ? " " : "X",
        };
      }
      // new
      if (c.x === new_x && c.y === new_y) {
        return {
          ...c,
          char: c.char === " " ? "S" : "s",
        };
      }
      // other
      return c;
    });
    return newConfig;
  };

  const animatePush = (action, newConfig) => {
    const sokoban = getSokoban(newConfig);
    const old_x = sokoban.x;
    const old_y = sokoban.y;
    const d = action;
    const new_x = old_x + directions[d].x;
    const new_y = old_y + directions[d].y;
    const next_x = new_x + directions[d].x;
    const next_y = new_y + directions[d].y;
    newConfig.cells = newConfig.cells.map((c) => {
      // old
      if (c.x === old_x && c.y === old_y) {
        return {
          ...c,
          char: sokoban.char === "S" ? " " : "X",
        };
      }
      // new
      if (c.x === new_x && c.y === new_y) {
        return {
          ...c,
          char: c.char === "C" ? "S" : "s",
        };
      }
      // next
      if (c.x === next_x && c.y === next_y) {
        return {
          ...c,
          char: c.char === " " ? "C" : "c",
        };
      }
      // other
      return c;
    });
    console.log("push", newConfig);
    return newConfig;
  };

  async function animate() {
    let newConfig = { ...mapOriginal };
    for (let i = 0; i < plan.length; i++) {
      await timer(250);
      const action = plan[i];
      console.log("action", action);
      const sokoban = getSokoban(newConfig);
      const old_x = sokoban.x;
      const old_y = sokoban.y;
      const d = action;
      const new_x = old_x + directions[d].x;
      const new_y = old_y + directions[d].y;
      const next = newConfig.cells.find((c) => c.x === new_x && c.y === new_y);
      if (next.char === "C" || next.char === "c") {
        newConfig = animatePush(action, newConfig);
      } else {
        newConfig = animateMove(action, newConfig);
      }
      setMap(newConfig);
      setTick((prev) => prev + 1);
    }
  }

  const startAnimation = () => {
    setTick(0);
    animate();
  };

  return (
    <div style={style}>
      <div>
        <input
          className="mb-2"
          type="file"
          name="file"
          id="file"
          onChange={(e) => {
            setInputText("");
            handleFile(e, setMap, setMapOriginal);
          }}
        />
      </div>
      <input
        type="text"
        placeholder="left, left, up, down, ..."
        style={{ border: "1px solid" }}
        className="mb-2"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <div style={{ display: "flex" }}>
        <button onClick={startAnimation} disabled={!inputText}>
          Reset
        </button>
        <button style={{ visibility: "hidden" }} />
        <button onClick={startAnimation} disabled={!inputText}>
          start
        </button>
      </div>
      <br />
      <Grid
        tick={tick}
        total={plan.length}
        cells={map.cells}
        rows={map.rows}
        cols={map.cols}
      />
    </div>
  );
};

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const directions = {
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
};

export default App;
