import React from "react";

const Contact = () => {
  return (
    <div className="bottom-0 left-0 right-0 bg-custom-yellow py-20 text-center" id="contact">
      <span className="mt-12 text-5xl">We'd love to hear your thoughts</span>
      <form className="mt-10 w-1/2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <input
            type="text"
            className="rounded-lg bg-gray-200 p-2 outline-none"
            placeholder="name"
          />
          <input
            type="text"
            className="rounded-lg bg-gray-200 p-2 outline-none"
            placeholder="email"
          />
        </div>
        <div className="mt-10">
          <textarea
            className="rounded-lg bg-gray-200 p-2 w-full h-screen-25 outline-none"
            placeholder="message"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="text-white text-xl hover:shadow-lg rounded-lg bg-gray-800 px-5 py-2"
          >
            Send
          </button>
        </div>
      </form>
      <hr className="mt-20 bg-gray-200 w-2/3 mx-auto" />
      <div className="flex justify-center w-2/3 mx-auto">
        <div className="mt-10 mr-auto">
          <span className="mx-5">
            <a href="https://github.com/vuduccuong" target="_blank">
              CuongVD7
            </a>
          </span>
        </div>
        <div className="mt-10 ml-auto">&copy; 2021</div>
      </div>
    </div>
  );
};

export default Contact;
