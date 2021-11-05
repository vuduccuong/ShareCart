import axios from "axios";
import React, { Fragment, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { updateDeleteItemAPI } from "../../../../api/adminApi";
import { configDelete } from "../../../../api/baseApi";
import { removeProduct } from "../../adminSlice";
import AddEditForm from "../../components/Form/addEdit";
import ListProduct from "../../components/Product/list-product";

const AdminProduct = (props) => {
  const shopInfo = useSelector((state) => state.admin.adminInfo);

  const totalItem = shopInfo?.items?.length ?? 0;

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [productUpdate, setProductUpdate] = useState({});

  const onEditProductHandle = (e) => {
    setProductUpdate(e);
    setIsUpdate(true);
    setShowForm(true);
  };

  const onDeleteProductHandle = (ids) => {
    const data = {
      shopId: ids.shopId,
      itemId: ids.itemId,
    };
    axios
      .delete(updateDeleteItemAPI, { data: data }, configDelete)
      .then((res) => {
        if (res.status === 200) {
          dispatch(removeProduct(data));
        }
      });
  };

  const onAddProductHandler = () => {
    setShowForm(true);
  };

  return (
    <Fragment>
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Products</h2>

      <div className="mb-2 text-right">
        <button
          className={`px-7 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple`}
          onClick={onAddProductHandler}
        >
          Thêm mới
        </button>
      </div>

      <div className="w-full overflow-hidden rounded-lg shadow-sm">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {shopInfo?.items?.length > 0 && (
                <ListProduct
                  products={shopInfo.items}
                  edit={onEditProductHandle}
                  del={onDeleteProductHandle}
                />
              )}
            </tbody>
          </table>
        </div>
        {totalItem > 10 ? (
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
            <span className="flex items-center col-span-3">
              Showing {(page - 1) * 10 + 1}-{page * 10} of {totalItem}
            </span>
            <span className="col-span-2"></span>

            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalItem}
                pageRangeDisplayed={5}
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

      {showForm && (
        <AddEditForm
          closeModal={() => setShowForm(false)}
          isUpdate={isUpdate}
          product={productUpdate}
        />
      )}
    </Fragment>
  );
};

export default AdminProduct;
