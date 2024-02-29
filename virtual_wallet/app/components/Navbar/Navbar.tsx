"use client";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const pathname = usePathname();

  let pageTitle = "";
  if (pathname === "/dashboard") {
    pageTitle = "Dashboard";
  } else if (pathname === "/my-wallets") {
    pageTitle = "My Wallets";
  } else if (pathname === "/transactions") {
    pageTitle = "Transactions";
  } else if (pathname === "/settings") {
    pageTitle = "Settings";
  }

  return (
    <nav>
      <div className="flex w-full gap-3 my-12 items-center justify-between">
        <div className="flex gap-3 items-center mt-10">
          <FaAlignJustify size={20} />
          <h1 className="text-2xl">{pageTitle} Page</h1>
        </div>

        <div>
          <div className="flex items-center gap-10">
            <FaBell color="#eebefa" size={20} />
            <FaMessage color="#eebefa" size={20} />
            <FaCalendar color="#eebefa" size={20} />
            <Button buttonName="Add Transaction" />
          </div>
        </div>
      </div>
    </nav>
  );
};
