import { Fragment } from "react";
import { Col, DatePicker } from "antd";
import { Test } from "@components/test";
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
          <h1>Hello AsurRaa</h1>
          <DatePicker />
          <Col></Col>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
