import axios from "axios";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAPI } from "../../../../api/adminApi";
import { configForm } from "../../../../api/baseApi";
import Modal from "../../../../components/Modal";
import ModalBody from "../../../../components/Modal/body";
import ModalFooter from "../../../../components/Modal/footer";
import ModalHeader from "../../../../components/Modal/header";
import { createNewProduct } from "../../adminSlice";

const AddEditForm = (props) => {
  const { isUpdate, product } = props;

  const shop = useSelector((state) => state.admin.adminAuth);
  const dispatch = useDispatch();

  const refForm = useRef();
  const refName = useRef();
  const refImage = useRef();
  const refPrice = useRef();
  const refActive = useRef();

  const resetHandle = () => {
    refForm.current.reset();
    props.closeModal();
  };

  const submitHandle = () => {
    const inputName = refName.current;
    const inputImage = refImage.current;
    const inputPrice = refPrice.current;
    const inputActive = refActive.current;

    const fData = new FormData();
    fData.append("shopId", shop.shopId);
    fData.append("name", inputName.value);
    fData.append("price", inputPrice.value);
    fData.append("image", inputImage.files[0]);
    fData.append("isActive", inputActive.checked);

    axios.post(itemAPI, fData, configForm).then((res) => {
      if (res.status === 200) {
        dispatch(createNewProduct(res.data));
        props.closeModal();
      }
    });
  };

  return (
    <Modal closeModal={props.closeModal}>
      <ModalBody>
        <ModalHeader>Addd</ModalHeader>
        <form className="mt-4 w-full" ref={refForm}>
          <div className="flex flex-col items-center">
            <label className={`block w-full`}>
              <span className="text-gray-700">Tên sản phẩm</span>
              <input
                className={`block w-full mt-1 
                focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                border rounded-lg 
                form-input`}
                type="text"
                maxLength={100}
                required={true}
                placeholder="Tên sản phẩm"
                ref={refName}
              />
            </label>

            <label className={`block w-full mt-4`}>
              <span className="text-gray-700">Giá tiền</span>
              <input
                className={`block w-full mt-1 
                focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                border rounded-lg 
                form-input`}
                type="number"
                required={true}
                placeholder="100.000"
                ref={refPrice}
              />
            </label>

            <label className={`block w-full mt-4`}>
              <span className="text-gray-700">Hình ảnh</span>
              <input
                className={`block w-full mt-1 
                focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
                border rounded-lg 
                form-input`}
                type="file"
                accept="*/png, */gif, */jpeg"
                ref={refImage}
              />
            </label>

            <label className={`block w-full mt-4`}>
              <input
                type="checkbox"
                className="form-checkbox rounded-sm"
                ref={refActive}
              />
              <span className="ml-2">Show on Home Page</span>
            </label>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button
          onClick={resetHandle}
          className="w-full px-5 py-3 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
        >
          Cancel
        </button>
        <button
          onClick={submitHandle}
          className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Submit
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default AddEditForm;
