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

  const totalItem = shopInfo?.items?.length ?? 0;

  const [page, setPage] = useState(1);

  const onEditProductHandle = () => {
    console.log("edit");
  };

  const onDeleteProductHandle = () => {
    console.log("delete");
  };

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

      <div className="w-full overflow-hidden rounded-lg shadow-sm">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Hans Burger</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        10x Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ 863.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center space-x-4 text-sm">
                    <IcEdit onEdit={onEditProductHandle} />
                    <IcDelete onDelete={onDeleteProductHandle} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {totalItem > 10 ? (
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span className="flex items-center col-span-3">
              Showing {(page - 1) * 10 + 1}-{page * 10} of {totalItem}
            </span>
            <span className="col-span-2"></span>

            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalItem}
                // pageRangeDisplayed={5}
                onChange={() => {
                  setPage((page) => page + 1);
                }}
                innerClass="inline-flex items-center"
                itemClass="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                activeClass="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
              />
            </span>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default DashBoardAdmin;
