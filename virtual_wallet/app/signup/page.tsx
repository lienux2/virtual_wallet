"use client"
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  image: string;
}

export default function SignUp() {
  const router = useRouter();
const [name, setName] = useState<string>("");
const [surname, setSurname] = useState<string>("");
const [username, setUsername] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [image, setImage] = useState<string>("");

  const addNewUser = async (e: { preventDefault: () => void; }) => {

    e.preventDefault()
        const newUser: User = {
        name,
        surname, 
        username,
        email,
        password,
        image
    }
    addUser(newUser)
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setImage("");
    router.push("/")
  };

  const addUser = (newUser: User) => {
    axios.post('http://localhost:3001/user', newUser)
      .then((response) => {
        const newCharacter = response.data.user;
      });
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="mb-20 text-xl">Sign Up by filling out form below</h1>
      {/* <CreateUser onAddNewUser={addUser}/> */}
      <form className="flex flex-col" onSubmit={addNewUser}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          className="peer px-3 py-1 rounded-lg text-dark-primary"
          type="text"
          placeholder="Name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mb-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide name.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="surname">
          Surname <span>*</span>
        </label>
        <input
          className="peer px-3 py-1 rounded-lg text-dark-primary"
          type="text"
          placeholder="Surname"
          id="surname"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <p className="mb-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide surname.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="username">
          Username <span>*</span>
        </label>
        <input
          className="peer px-3 py-1 rounded-lg text-dark-primary"
          type="text"
          placeholder="Username"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="mb-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide username.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="peer px-3 py-1 rounded-lg text-dark-primary"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="mb-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">
          Password <span>*</span>
        </label>
        <input
          className="peer px-3 py-1 rounded-lg text-dark-primary"
          type="password"
          placeholder="Password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="mb-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid password.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Profile picture</label>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
    id="image"
    value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="flex gap-3 my-10 justify-center items-center">
        <Link href="/">
          <Button buttonName="Cancel" />
        </Link>
        <Button buttonName="Sign Up"/>
      </div>
    </form>
    </div>
  );
}
