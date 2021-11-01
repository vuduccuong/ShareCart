import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { adminRegister } from "../../adminSlice";
import Container from "../../components/container";

const AdminRegisterPage = (props) => {
  const [helpText, setHelpText] = useState(true);

  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);


  const dispatch = useDispatch();

  const refLogo = useRef();
  const refImage = useRef();
  const refName = useRef();
  const refPhone = useRef();

  const UploadLogoHandler = (e) => {
    e.preventDefault();

    const enteredName = refName.current;
    const enteredPhone = refPhone.current;
    const enteredLogo = refLogo.current;

    if (!nameValue) {
      setNameErr(true);
      return;
    }
    if (!phoneValue) {
      setPhoneErr(true);
      return;
    }
    const fData = new FormData();
    fData.append('name', enteredName.value);
    fData.append('phoneNumber', enteredPhone.value);
    fData.append('logo', enteredLogo.files[0]);

    dispatch(adminRegister(fData));
  };

  const ChosseLogoHandler = (e) => {
    e.preventDefault();
    var file = URL.createObjectURL(e.currentTarget.files[0]);
    const image = refImage.current;

    image.style.backgroundImage = `url(${file})`;
    setHelpText(false);
  };

  return (
    <Container>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center bg-black rounded-xl p-4">
          <h2 className="text-3xl font-bold text-white">
            Restaurant
            <span className="text-black bg-yellow-600 rounded-lg pl-2 pr-2 ml-2">
              Generate
            </span>
          </h2>
        </div>
        <form className="mt-8 space-y-3" action="#" method="POST">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Restaurant Name
            </label>
            <input
              className={`text-base p-2 border ${
                nameErr ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:border-indigo-500`}
              type="text"
              placeholder="Ninja"
              ref={refName}
              onChange={() => {
                setNameErr(false);
              }}
            />
            {nameErr && <p className="text-sm text-red-500">Name Invalidate</p>}
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Phone Number
            </label>
            <input
              className={`text-base p-2 border ${
                phoneErr ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:border-indigo-500`}
              type="text"
              ref={refPhone}
              onChange={() => {
                setPhoneErr(false);
              }}
            />
            {phoneErr && (
              <p className="text-sm text-red-500">Phone number Invalidate</p>
            )}
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Attach Logo
            </label>
            <div
              className="flex items-center justify-center w-full"
              style={{
                backgroundImage: `url("https://via.placeholder.com/100")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              ref={refImage}
            >
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center">
                  {helpText && (
                    <p className="pointer-none text-white text-2xl mt-48">
                      Select logo from your computer
                    </p>
                  )}
                </div>
                <input
                  id="file-logo"
                  type="file"
                  className="hidden"
                  ref={refLogo}
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => {
                    ChosseLogoHandler(e);
                  }}
                />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: types of images</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full text-3xl flex justify-center bg-yellow-600 p-2  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-black hover:text-white shadow-lg cursor-pointer transition ease-in duration-75"
              onClick={(e) => {
                UploadLogoHandler(e);
              }}
            >
              Save Restaurant
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AdminRegisterPage;
