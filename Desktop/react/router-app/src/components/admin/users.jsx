import React from "react";
import SideBar from "./sideBar";

const Users = () => {
  return (
    <div>
      <h1>Admin Users</h1>

      <SideBar />
      <Route path="/admin/users" component={Users} />
    </div>
  );
};

export default Users;
