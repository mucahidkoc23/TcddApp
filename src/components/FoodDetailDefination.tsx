import React from 'react';
import { ExclamationOutlined } from '@ant-design/icons';


interface FoodDetailDefinationProps {
  title: string;
  defination: string;
}

export const FoodDetailDefination: React.FC<FoodDetailDefinationProps> = ({
  title,
  defination,
}) => {
  return (
    <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-blue-200 bg-[#f8efe6] shadow-lg md:flex-row">
      <div className="m-1 mb-4 flex items-center justify-center rounded-xl bg-gray-200 p-2 md:mb-0">
        <ExclamationOutlined className="text-orange-400" />
      </div>
      <div className="m-1 flex w-full flex-col text-center md:text-left">
        <span className="text-xs font-bold text-gray-400">{title}</span>
        <span className="text-xs">{defination}</span>
      </div>
    </div>
  );
};

interface FoodDetailDefinationLargeProps {
  defination: string;
  img: string;
}

export const FoodDetailDefinationLarge: React.FC<
  FoodDetailDefinationLargeProps
> = ({ defination, img }) => {
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-3xl bg-[#f8efe6] p-4 md:flex-row">
      <img
        src={img}
        alt="Image"
        style={{ height: 80, width: 80 }}
        className="mb-4 rounded-xl md:mb-0"
      />
      <span className="text-sm">{defination}</span>
    </div>
  );
};
