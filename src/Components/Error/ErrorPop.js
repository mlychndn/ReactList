import React from "react";
import style from "../Error/ErrorPop.module.css";
import Card from "../UI/Card";

const ErrorPop = (props) => {
  console.log("style", style["error-title"]);
  return (
    <Card className={style["errorPop"]}>
      <div className={style["error-title"]}>ERROR</div>
      {/* <div>{props.children}</div> */}
      <div>{props.children}</div>
    </Card>
  );
};

export default ErrorPop;
