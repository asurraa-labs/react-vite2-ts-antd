import React, { Fragment } from "react";
import { DatePicker } from "antd";

const App = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1>Hello world</h1>
          <DatePicker />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
