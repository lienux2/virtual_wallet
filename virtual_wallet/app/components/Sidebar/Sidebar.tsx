import Image from "next/image";
import Link from "next/link";
import { GiWallet } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export const Sidebar = () => (
  <div className="border-2 border-solid border-light-secondary flex flex-col gap-10 items-center mx-8 my-12 px-16 pt-20 rounded-2xl h-full min-w-96">
    <div className="flex items-center gap-3">
      <GiWallet color="#a5d8ff" size={50} />
      <h1>Virtual Wallet</h1>
    </div>
    <div className="flex items-center gap-3 mt-10 bg-light-icons text-black p-5 rounded-xl">
      <Image
        className="rounded-full"
        src="https://picsum.photos/50"
        width={30}
        height={30}
        alt="profile_image"
      />
      <div className="text-xs">
        <p>
          Hi, <span className="font-bold">User</span>!
        </p>
        <p>Email@email.com</p>
      </div>
      <FaChevronDown color="black"/>
    </div>
    <div className="flex flex-col mt-10 gap-10 items-center text-light-primary mb-34 text-xl font-bold">
      <Link href={"/dashboard"}>
        <h1>Dashboard</h1>
      </Link>
      <Link href={"/my-wallets"}>
        <h1>My wallets</h1>
      </Link>
      <Link href={"/transactions"}>
        <h1>Transactions</h1>
      </Link>
      <Link href={"/contacts"}>
        <h1>Contacts</h1>
      </Link>
      <Link href={"/settings"}>
        <h1>Settings</h1>
      </Link>
    </div>

    <div className="mt-60 bottom-0 text-light-primary">
      <hr className="mt-3 mb-3" />
      <div className="flex text-xs flex-col justify-center items-center gap-5">
        <p className="text-#9290c3">@2024 All Rights Reserved</p>
        <h2 className="flex gap-2">
          Made with
          <span>
            <FaHeart color="red" />
          </span>
          by lienux2
        </h2>
        <div className="flex gap-5">
          <Link href={"https://github.com/lienux2"} target="_blank">
            <FaGithub color="white" size={20} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/liene-svilpe/"}
            target="_blank"
          >
            <FaLinkedin color="white" size={20} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);
