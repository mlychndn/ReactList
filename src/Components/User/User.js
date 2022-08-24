import React, { useState } from "react";
import styles from "./User.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const User = (props) => {
  console.log("style", props.style);
  const [initialName, setInitialName] = useState("");
  const [initialAge, setInitialAge] = useState("");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form is submitted!");
    let userDetails = {
      id: `U-${Math.floor(Math.random() * 100 + 1)}`,
      userName: initialName,
      age: initialAge,
    };

    props.onFormSubmit(userDetails);
    setInitialName("");
    setInitialAge("");
  };

  const userNameHandler = (event) => {
    setInitialName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setInitialAge(event.target.value);
  };
  return (
    <Card className={`${styles["user-form"]} ${props.style ? "noPopup" : ""}`}>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="user-input">Username</label>
        </div>
        <div className={styles["user-input"]}>
          <input
            id="user-input"
            type="text"
            value={initialName}
            onChange={userNameHandler}
          />
        </div>
        <div>
          <label htmlFor="user-age">Age (Years)</label>
        </div>
        <div className={styles["user-input"]}>
          <input
            id="user-age"
            type="number"
            value={initialAge}
            onChange={userAgeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default User;
