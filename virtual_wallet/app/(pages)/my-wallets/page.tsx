import Image from "next/image";
import { Button } from "../../components/Button/Button";
import { PiCircleFill } from "react-icons/pi";

export default function MyWallets() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-5">
        <Button buttonName="Add Wallet" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex gap-5 items-center justify-between border rounded-3xl p-10">
          <div className="flex gap-10 items-center">
            <PiCircleFill color="red" />
            <h1 className="text-3xl">Wallet name</h1>
          </div>
          <p className="text-3xl">Balance: -100€</p>
          <div className="flex gap-5">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-10">
          <div className="flex gap-10 items-center">
            <PiCircleFill color="green" />
            <h1 className="text-3xl">Wallet name</h1>
          </div>
          <p className="text-3xl">Balance: 5000€</p>
          <div className="flex gap-5">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-10">
          <div className="flex gap-10 items-center">
            <PiCircleFill color="yellow" />
            <h1 className="text-3xl">Wallet name</h1>
          </div>
          <p className="text-3xl">Balance: 0€</p>
          <div className="flex gap-5">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
}
