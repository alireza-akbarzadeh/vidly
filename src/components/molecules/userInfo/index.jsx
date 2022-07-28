import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { Avatar } from "constant/images";

const UserInfo = () => {
  return (
    <div
      className={
        "rounded-3xl mt-5 bg-gradient-to-r from-sky-600 to-blue-600 p-4"
      }
    >
      <div className={"border-b border-[rgba(255,255,255,0.2)] py-2"}>
        <div className={"flex items-center pb-2 gap-3"}>
          <div className={"relative"}>
            <img
              src={Avatar}
              className={"rounded-full w-12"}
              alt={"Alireza Akbarzadeh"}
            />
            <RiEditCircleFill
              className={
                "absolute text-gray-200 text-xl bottom-0  border-2  border-blue-400 rounded-full right-0"
              }
            />
          </div>
          <div className={"text-white text-base"}>
            <span>Alireza Akbarzadeh</span>
            <span className={"block opacity-60 text-sm"}>
              +98 0938 122 3880
            </span>
          </div>
        </div>
      </div>
      <div className={"flex justify-between items-center pt-4"}>
        <div className={"inline-flex  items-center gap-2"}>
          <div className={"p-3 bg-white rounded-full opacity-40"}>
            <MdOutlineAccountBalanceWallet
              fontSize={20}
              className={"text-gray-800 font-bold"}
            />
          </div>
          <div className={"text-white"}>
            <span className={"opacity-40 text-sm"}>balance</span>
            <span className={"block "}>$ 38000</span>
          </div>
        </div>
        <div
          className={
            "rounded-full flex items-center cursor-pointer justify-center text-gray-800 bg-gray-200 p-3"
          }
        >
          <AiOutlinePlus fontSize={20} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
