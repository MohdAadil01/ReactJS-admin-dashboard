import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <Link
      to={"/admin/dashboard"}
      className="text-[1.1rem] font-bold tracking-wider p-4 hover:text-blue-600 text-center"
    >
      GO TO ADMIN DASHBOARD
    </Link>
  );
}

export default Admin;
