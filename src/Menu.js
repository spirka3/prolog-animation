import React from 'react';
import Button from "react-bootstrap/Button";

const Menu = ({solve}) => {

  const btnStyle = {
    display: "block",
    width: "100px",
    borderRadius: "0"
  }

  return (
    <>
      {/*<img className="d-inline-block" style={{verticalAlign: "top"}} src="/logo512.png" alt="logo" width="100" height="100"/>*/}
      <div style={{margin: "auto", width: "50%", marginBottom: ".5rem"}}>
        {/*<p>Select mode</p>*/}
        {/*<Button style={btnStyle} active={isActive("experiment")}>Experiment</Button>*/}
        {/*<Button style={btnStyle} active={isActive("testing")}>Testing</Button>*/}
        {/*<Button style={btnStyle} variant={solved === null ? "primary" : solved ? "success" : "warning" }>Solved</Button>*/}
        <Button style={btnStyle} onClick={() => solve()}>Solve</Button>
      </div>
    </>
  );
};

export default Menu;
