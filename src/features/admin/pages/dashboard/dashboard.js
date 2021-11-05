import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import DashBoardCard from "../../components/Card/dashboardCard";
import {
  CartIcon,
  MessageIcon,
  MoneyIcon,
  TotalPeopleIcon,
} from "../../components/Icon/dashboardIcon";
import IcDelete from "../../components/Icon/delete";
import IcEdit from "../../components/Icon/edit";

const DashBoardAdmin = () => {
  const shopInfo = useSelector((state) => state.admin.adminInfo);

  return (
    <Fragment>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <DashBoardCard
          icon={<TotalPeopleIcon />}
          title={"Total clients"}
          content={6389}
        />

        <DashBoardCard
          icon={<MoneyIcon />}
          title={"Account balance"}
          content={"$ 46,760.89"}
        />

        <DashBoardCard icon={<CartIcon />} title={"New sales"} content={376} />

        <DashBoardCard
          icon={<MessageIcon />}
          title={"Pending contacts"}
          content={35}
        />
      </div>
    </Fragment>
  );
};

export default DashBoardAdmin;
