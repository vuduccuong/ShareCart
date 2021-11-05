import React from "react";
import IcDelete from "../Icon/delete";
import IcEdit from "../Icon/edit";

const ProductInfo = (props) => {
  const { edit, del } = props;
  const { name, price, image, isActive } = props;

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={`data:image/jpeg;charset=utf-8;base64, ${image}`}
              alt={name}
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-gray-600">{/* 10x Developer */}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">
        {price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
      </td>
      <td className="px-4 py-3 text-xs">
        <span
          className={`px-2 py-1 font-semibold leading-tight text-green-700 ${
            isActive ? "bg-green-100" : "bg-red-300"
          } rounded-full`}
        >
          {isActive ? "Active" : "Deactive"}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex items-center space-x-4 text-sm">
          <IcEdit onEdit={edit} />
          {isActive && <IcDelete onDelete={del} />}
        </div>
      </td>
    </tr>
  );
};

export default ProductInfo;
