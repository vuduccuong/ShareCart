import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminInfoById } from "../../adminSlice";
import Header from "../Header";
import NavBar from "../NavigationBar";

const LayoutAdmin = (props) => {
  const { admin } = props;
  
  const adminInfo = useSelector((state) => state.admin.adminInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminInfoById(admin.shopId));
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <NavBar />
      <div className="flex flex-col flex-1">
        <Header adminInfo={adminInfo} />
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container px-6 mx-auto grid">{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
