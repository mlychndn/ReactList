import React, { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";
import "./App.css";
import ErrorPop from "./Components/Error/ErrorPop";

const App = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [isError, setisError] = useState(false);
  let content = "";

  const formHandler = (formDetails) => {
    if (!formDetails.userName) {
      setisError(true);
      return;
    }
    setUserDetails([...userDetails, formDetails]);
  };

  console.log("userDetails", userDetails);
  if (isError) {
    content = <ErrorPop>Username field should not be empty</ErrorPop>;
  } else {
    content = userDetails.map((user) => {
      console.log("haa");
      return <UserList details={user}></UserList>;
    });
  }

  return (
    <div>
      <User onFormSubmit={formHandler} style={isError} />
      {content}
    </div>
  );
};

export default App;
