import React from "react";
import style from "./ErrorPop.modules.css";
import Card from "../UI/Card";

const ErrorPop = (props) => {
  return (
    <Card className={style["errorPop"]}>
      <div>{props.children}</div>
    </Card>
  );
};

export default ErrorPop;
