import { Link } from "react-router";
import type { RawBlogI } from "../../interface";

const HeroLatestBlog = ({ blog }: { blog: RawBlogI }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="h-full w-full flex flex-col justify-between items-center gap-2 ">
      <div className="bg-[#3b3b3f] h-full w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out">
        <div className="w-auto h-auto p-2 flex flex-col">
          <div className="text-[0.6rem] text-dim-text">
            {new Date(blog.created_at).toLocaleString("en-Us")}
          </div>
          <div className="font-raleway text-lg font-bold leading-5 mb-1">
            {blog.title}
          </div>
          <div className="text-xs font-extralight ">- {blog.author_name}</div>
        </div>
      </div>
    </Link>
  );
};

export default HeroLatestBlog;
