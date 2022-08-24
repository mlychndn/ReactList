import React from "react";
import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log("details", props.details);
  let userString = `${props.details.userName} ${props.details.age}`;
  return (
    <div className={styles["User-list"]}>
      <div className={styles["User-list-value"]}>{userString}</div>
    </div>
  );
};

export default UserList;
