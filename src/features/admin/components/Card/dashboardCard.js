import React from "react";

const DashBoardCard = (props) => {
  const { icon, title, content } = props;

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-3 mr-4 text-orange-500 bg-green-300 rounded-full">
        {icon}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DashBoardCard;
