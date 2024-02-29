import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { Button } from "../../components/Button/Button";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-2 justify-center gap-20 h-1/3 mx-20">
        <div className="border rounded-3xl">
          <div className="px-10">
            <RiVisaLine size={150} />
          </div>
          {/* <FaCcMastercard size={150}/> */}
          <div className="flex gap-10 justify-center text-5xl mt-10">
            <p>****</p>
            <p>****</p>
            <p>****</p>
            <p>0000</p>
          </div>
          <div className="flex justify-between text-xl mx-20 mt-20">
            <div>
              <p>Name Surname</p>
            </div>
            <div className="flex gap-3">
              <p>09</p>
              <span>/</span>
              <p>25</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-3xl gap-20">
          <div className="flex justify-center">
            <h1 className="text-7xl font-bold">100€</h1>
          </div>
          <div className="flex justify-center gap-5">
            <Button buttonName="Total" />
            <Button buttonName="Incoming" />
            <Button buttonName="Outgoing" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10">
        <h1 className="text-3xl my-10">Latest transactions:</h1>

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-8">
          <div className="flex gap-10 items-center">
            <Image
              className="rounded-full"
              src="https://picsum.photos/70"
              width={70}
              height={70}
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

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-8">
          <div className="flex gap-10 items-center">
            <Image
              className="rounded-full"
              src="https://picsum.photos/70"
              width={70}
              height={70}
              alt="profile_image"
            />
            <h1 className="text-3xl">Name Surname</h1>
          </div>
          <p className="text-3xl">- 200€</p>
          <div className="flex gap-5">
            <Button buttonName="See details" />
            <Button buttonName="Mark as fraudulent" />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between border rounded-3xl p-8">
          <div className="flex gap-10 items-center">
            <Image
              className="rounded-full"
              src="https://picsum.photos/70"
              width={70}
              height={70}
              alt="profile_image"
            />
            <h1 className="text-3xl">Name Surname</h1>
          </div>
          <p className="text-3xl">+ 600€</p>
          <div className="flex gap-5">
            <Button buttonName="See details" />
            <Button buttonName="Mark as fraudulent" />
          </div>
        </div>
      </div>
    </>
  );
}
