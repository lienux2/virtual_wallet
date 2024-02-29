"use client"
import Link from "next/link";
import { Button } from "./components/Button/Button";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form className="flex flex-col gap-5 rounded-3xl justify-center items-center">
        <div>
          <label className="fs-md" htmlFor="username">
            Username:
          </label>
          <br />
          <input
            className="w-52 h-9 border-none rounded-xs my-5 px-5 text-dark-primary"
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="fs-md" htmlFor="Password">
            Password:
          </label>
          <br />
          <input
            className="w-52 h-9 border-none rounded-xs my-5 px-5 text-dark-primary"
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
        <Link href="/dashboard">
            <Button buttonName="Login"/>
            </Link>
          <Link href="/signup">
            <Button buttonName="Sign up" />
          </Link>
        </div>
      </form>
    </div>
  );
}
