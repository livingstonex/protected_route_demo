import React from "react";
import auth from "../Auth";

const Dashboard = (props: any) => {
  return (
    <>
      <div>Dashboard Page</div>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
