import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.details.map((detail) => (
          <li
            key={detail.id}
            className={styles["User-list-value"]}
          >{`${detail.userName} (${detail.age})`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
