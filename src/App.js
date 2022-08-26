import React, { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";
import ErrorPop from "./Components/Error/ErrorPop";

import "./App.css";

const App = () => {
  const [userDetails, setUserDetails] = useState([]);
  let content = "";

  const formHandler = (formDetails) => {
    if (!formDetails.userName) {
      console.log("here");
      content = <ErrorPop>UserName field should not be empty</ErrorPop>;
      setUserDetails([]);
      return;
    } else if (!formDetails.age || +formDetails.age <= 0) {
      console.log("there");
      content = (
        <ErrorPop>
          Age field should not be empty or less than or equal to zero
        </ErrorPop>
      );

      setUserDetails([]);
      return;
    }
    setUserDetails([...userDetails, formDetails]);
  };

  return (
    <div>
      <User onFormSubmit={formHandler} />
      {content}
      <UserList details={userDetails}></UserList>
    </div>
  );
};

export default App;
