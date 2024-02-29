"use client";

type ButtonProps = {
  buttonName: string;
  click?: () => void;
};

export const Button = ({ buttonName, click }: ButtonProps) => (
  <button className="bg-light-details text-black py-2 px-4 rounded-xl" onClick={click}>{buttonName}</button>
);
