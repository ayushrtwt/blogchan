import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
// import { Logout } from "./Logout";
// import { useBlogs } from "../hooks";


export const Appbar = () => {

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
  to={"/blogs"}
  className="flex flex-col justify-center cursor-pointer text-4xl font-bold text-gray-900 hover:text-black transition-all duration-300"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 hover:bg-gradient-to-r hover:from-black hover:to-black">
    BlogChan
  </span>
</Link>

      <div className="flex">
        <Link to={"/publish"}>
        <button
          type="button"
          className="text-black bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out shadow-sm hover:shadow-md mr-4"
        >
          Write
        </button>
        </Link>
        <Avatar size={"big"} name="Ahmed"/>
        {/* <Logout /> */}
      </div>
      
    </div>
  );
};