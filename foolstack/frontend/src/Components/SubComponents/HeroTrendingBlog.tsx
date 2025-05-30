import { useRef } from "react";
import type { RawBlogI } from "../../interface";
import { useNavigate } from "react-router";

export const HeroTrendingBlog = ({ blog }: { blog: RawBlogI }) => {
  const navigate = useNavigate();

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  if (descriptionRef.current) {
    descriptionRef.current.innerHTML = blog.description;
  }

  const navigateToBlog = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div
      onClick={navigateToBlog}
      className=" cursor-pointer p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item1 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out"
    >
      <div className="w-auto h-auto flex flex-col">
        <div className="text-[0.6rem] text-dim-text">
          {new Date(blog.created_at).toLocaleString("en-US")}
        </div>
        <div className="font-raleway text-lg font-bold leading-5 mb-1">
          {blog.title}
        </div>
        <div className="text-xs font-extralight mb-2">- {blog.author_name}</div>
        <div>
          <p
            ref={descriptionRef}
            className="mb-1 h-8 text-dim-text text-xs overflow-hidden"
          >
            {/* Unravel the world of computer hardware, cybersecurity, and
            underground tech culture. The Circuit Breaker offers sharp takes,
            tutorials, and analysis on the ever-shifting digital terrain — where
            code meets creativity, and security meets strategy. */}
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          src={blog.blog_image_url || "/Images/MilkyWay.webp"}
          alt=""
          className="h-[100%] w-[100%] rounded-md"
        />
      </div>

      <div className="flex py-1 gap-x-1.5">
        <div className="center-child |">
          <img
            src={"/Images/icons8-thick-arrow-pointing-up-96 (2).png"}
            alt=""
            className="w-5 cursor-pointer"
          />
          <p>{blog.upvotes}</p>
        </div>
        <div className="center-child">
          <img
            src={"/Images/icons8-thick-arrow-pointing-up-96 (2).png"}
            alt=""
            className="w-5 cursor-pointer rotate-[180deg]"
          />
          <p>{blog.downvotes}</p>
        </div>
      </div>
    </div>
  );
};
