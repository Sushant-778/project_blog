// import type{ CommentI } from "../../interface";

// const VeryRecentComment = ({commentObj}: {commentObj: CommentI}) => {

//     const {comment, user, created_at } = commentObj;

// 	return (
// 		<div className="min-h-28 max-h-40 h-fit w-[50%] flex flex-col justify-start gap-3 py-4 px-2 rounded-sm bg-[#3b3b3f] text-dim-text text-sm my-auto overflow-hidden">
//             <p>{created_at}</p>
// 			<hr className="border-cornflowerblue" />
// 			<div className="h-[80%] flex gap-2 font-raleway">
// 				<div className="">
// 					{" "}
// 					<img src={user?.image} alt="" className="max-w-12 rounded-full" />
// 				</div>
// 				<div className="w-full overflow-y-scroll">
// 					<h3 className="text-lg text-heading-text">{user?.name}</h3>
// 					<p className="w-full overflow-hidden">
//                         {/* {comment} */}

//                         jklasdkf
//                         adsf;adsf
//                         adsfk;lasdf
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur quod optio voluptates incidunt, perferendis nemo nam possimus dignissimos hic ex necessitatibus ipsum eos, error nihil perspiciatis dolores reprehenderit obcaecati.
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur quod optio voluptates incidunt, perferendis nemo nam possimus dignissimos hic ex necessitatibus ipsum eos, error nihil perspiciatis dolores reprehenderit obcaecati.
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur quod optio voluptates incidunt, perferendis nemo nam possimus dignissimos hic ex necessitatibus ipsum eos, error nihil perspiciatis dolores reprehenderit obcaecati.
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur quod optio voluptates incidunt, perferendis nemo nam possimus dignissimos hic ex necessitatibus ipsum eos, error nihil perspiciatis dolores reprehenderit obcaecati.
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default VeryRecentComment;

import type {CommentI} from "../../interface";

const VeryRecentComment = ({commentObj}: {commentObj: CommentI}) => {
	const {comment, user, created_at} = commentObj;

	return (
		<div className="h-full w-[50%] flex flex-col justify-start gap-2 py-4 px-2 rounded-sm bg-[#3b3b3f] text-dim-text text-sm my-auto">
			<p>
				{new Date(created_at).toLocaleString("en-US", {
					weekday: "short",
					year: "numeric",
					month: "short",
					day: "numeric",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: true,
				})}
			</p>
			<hr className="border-cornflowerblue" />
			<div className="h-full flex gap-2 font-raleway mb-2">
				<div>
					<img src={user?.image} alt="user" className="max-w-12 rounded-full" />
				</div>
				<div className="f-col | ">
					<h3 className="text-lg text-heading-text">{user?.name}</h3>
					<div className="w-full max-h-20 overflow-y-auto pr-2">
						<p className="whitespace-pre-wrap pb-5">
							{comment}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
							asperiores voluptates, rerum quae libero, porro quas aperiam nobis
							distinctio iusto at saepe. Sequi pariatur veritatis minima
							placeat, soluta ut aut! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Possimus asperiores voluptates, rerum quae
							libero, porro quas aperiam nobis distinctio iusto at saepe. Sequi
							pariatur veritatis minima placeat, soluta ut aut! Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Possimus asperiores
							voluptates, rerum quae libero, porro quas aperiam nobis distinctio
							iusto at saepe. Sequi pariatur veritatis minima placeat, soluta ut
							aut! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Possimus asperiores voluptates, rerum quae libero, porro quas
							aperiam nobis distinctio iusto at saepe. Sequi pariatur veritatis
							minima placeat, soluta ut aut!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VeryRecentComment;
