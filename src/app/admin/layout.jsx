"use client";

import Header from "@/components/Header";
import ImpersonateSidebar from "@/components/impersonateSidebar";
import OnItemClick from "@/components/MuiTreeView";
import { useState, useEffect } from "react";

const AdminLayout = ({ children }) => {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const userEmail = localStorage.getItem("userEmail");
  //   setUserName(userEmail);
  // }, []);

  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-104px)]">
        <ImpersonateSidebar />

        {/* {userName && <OnItemClick loggedInUser={userName} />} */}
        <div className="max-h-screen p-6 grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
