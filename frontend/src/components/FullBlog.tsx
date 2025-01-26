import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 pt-20 max-w-screen-xl ">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-3">Posted on 26th jan 2025</div>
            <div className="">{blog.content}</div>
          </div>

          <div className="col-span-4">
            <div className="text-slate-600 text-lg">
                Author
            </div>
            
            <div className="flex">
                <div className="pr-4 flex flex-col justify-center">
                <Avatar size={"small"} name={blog.author.name || "Anonymous"}/>
                </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  This is just a random phrase if you know you know
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};