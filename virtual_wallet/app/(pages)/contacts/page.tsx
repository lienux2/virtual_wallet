import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { Button } from "../../components/Button/Button";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <div className="flex gap-5 mb-5">
        <Button buttonName="Add Contact" />
      </div>

      <div className="grid grid-cols-4 justify-center gap-16 h-1/3 mx-20">
        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 border rounded-xl p-10">
          <Image
            className="rounded-full"
            src="https://picsum.photos/150"
            width={150}
            height={150}
            alt="profile_image"
          />
          <h1>Name</h1>
          <h1>Surname</h1>
          <div className="flex justify-center gap-3">
            <Button buttonName="Details" />
            <Button buttonName="Edit" />
            <Button buttonName="Delete" />
          </div>
        </div>
      </div>
    </>
  );
}
