import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router";
import {getIndividualBlog, postComment} from "../apis/blogApis";
import type {BlogResI} from "../interface";
import Loading from "./UI/Loading";
import Comment from "./SubComponents/Comment";
import {useUser} from "../ContextProvider/UserContext";
import VeryRecentComment from "./SubComponents/VeryRecentComment";

const IndivialBlog = () => {
	const [blog, setBlog] = useState<BlogResI>();
	const [loading, setLoading] = useState(true);
	const {blogId} = useParams<{blogId: string}>();

	const {user} = useUser();

	// for blog description (that was in html)
	const descriptionRef = useRef<HTMLElement>(null);

	// for posting comment
	const [comment, setComment] = useState("");

	const handlePostingComment = async () => {
		try {
			if (blog?.id && user?.userId) {
				const res = await postComment(user.userId, blog.id, comment);
				console.log(res);

				alert(res.data.message);
				setComment("");
			}
		} catch (error) {
			console.log(error);
			alert("Couldn't Post Comment");
		}
	};

	// console.log(blogId);

	useEffect(() => {
		const fetchFunction = async () => {
			try {
				const res = await getIndividualBlog(blogId!);
				const {data: blogData} = res.data;

				console.log(blogData);

				// for testing loader
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				await new Promise<void>((resolve, _) => {
					setTimeout(() => {
						resolve();
					}, 1000);
				});

				if (blogData) {
					setBlog(blogData);

					if (descriptionRef.current) {
						descriptionRef.current.innerHTML = blogData.description;
					}
				} else {
					alert("No Blog Data Found");
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchFunction();
	}, [blogId]);

	if (loading) return <Loading />;
	else if (!loading && !blog) return "Blog Not Found";

	return (
		<main className="w-[70dvw] m-auto">
			<article className="mb-14 flex flex-col justify-center gap-y-4 ">
				<header className="text-dim-text">
					<h1 className="font-raleway text-3xl font-bold text-heading-text leading-8 mb-1">
						{blog?.title} <br />
					</h1>
					<h2 className="text-xs font-light  text-dim-text">
						By {blog?.author_name}
					</h2>
					<time className=" text-xs font-light">
						{" "}
						At{" "}
						{new Date(blog?.created_at || Date.now()).toLocaleString("en-US", {
							weekday: "short",
							year: "numeric",
							month: "short",
							day: "numeric",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							hour12: true,
						})}
					</time>
				</header>
				<figure>
					<img
						src={blog?.blog_image_url}
						alt=""
						className="w-fit h-fit object-cover"
					/>
				</figure>
				<section
					className="mt-8 font-raleway text-heading-text text-base leading-6"
					ref={descriptionRef}></section>
			</article>

			<section
				className="h-50 
                    flex justify-between gap-5 ">
				{blog?.comments && <VeryRecentComment commentObj={blog.comments[0]} />}

				<div className="f-col justify-between gap-1 | w-[50%] mx-auto">
					<textarea
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						className="h-full w-full rounded-sm border border-gray-400 focus:border-cornflowerblue p-3 text-sm focus:outline-none resize-none text-heading-text"
						placeholder="Add a comment..."></textarea>

					<button
						onClick={handlePostingComment}
						className="w-full text-white font-semibold bg-cornflowerblue p-1.5 rounded-sm cursor-pointer">
						Send Comment
					</button>
				</div>
			</section>

			{blog?.comments[1] && (
				<section className="my-5">
					<div>
						<h2 className="text-heading-text font-semibold my-2">
							Other Comments
						</h2>
					</div>
					<div className=" flex  items-center gap-5 h-52">
						{blog.comments.map((commentObj, idx) =>
							idx != 0 ? <Comment key={commentObj.id} commentObj={commentObj}/> : <></>
						)}
					</div>
				</section>
			)}
		</main>
	);
};

export default IndivialBlog;
