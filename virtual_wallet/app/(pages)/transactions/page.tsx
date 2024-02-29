import Image from "next/image";
import { Button } from "../../components/Button/Button";

export default function Transactions() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-5">
        <Button buttonName="All" />
        <Button buttonName="Incoming" />
        <Button buttonName="Outgoing" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex gap-5 items-center justify-between border rounded-3xl p-10">
          <div className="flex gap-10 items-center">
            <Image
              className="rounded-full"
              src="https://picsum.photos/100"
              width={100}
              height={100}
              alt="profile_image"
            />
            <h1 className="text-3xl">Name Surname</h1>
          </div>
          <p className="text-3xl">+ 100€</p>
          <div className="flex gap-5">
            <Button buttonName="See details" />
            <Button buttonName="Mark as fraudulent" />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-10">
          <div className="flex gap-10 items-center">
            <Image
              className="rounded-full"
              src="https://picsum.photos/100"
              width={100}
              height={100}
              alt="profile_image"
            />
            <h1 className="text-3xl">Name Surname</h1>
          </div>
          <p className="text-3xl">+ 100€</p>
          <div className="flex gap-5">
            <Button buttonName="See details" />
            <Button buttonName="Mark as fraudulent" />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-10">
          <div className="flex gap-10 items-center">
            <Image
              className="rounded-full"
              src="https://picsum.photos/100"
              width={100}
              height={100}
              alt="profile_image"
            />
            <h1 className="text-3xl">Name Surname</h1>
          </div>
          <p className="text-3xl">+ 100€</p>
          <div className="flex gap-5">
            <Button buttonName="See details" />
            <Button buttonName="Mark as fraudulent" />
          </div>
        </div>
      </div>
    </div>
  );
}
