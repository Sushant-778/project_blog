import {useParams} from "react-router-dom";

const Profile = () => {
	const {userId} = useParams();

	return (
		<main className=" w-full p-2  flex flex-col items-center gap-1">
			<section className="bg-dim-text w-200 rounded-sm p-4 flex items-start gap-2">
				<div className="flex items-start gap-1  w-[85%]">
					<div className="w-100">
						<img src="/Images/icons8-male-user-100.png" alt="" />
					</div>
					<div>
						<div className=" flex flex-col ">
							<span className="text-2xl font-semibold ">Jhon Human</span>
							<span className="text-[14px] -mt-1 text-gray-800">
								User ID : {userId}
							</span>
							<p className=" mt-2 text-xs text-[#e2e2e2] ">
								"Hi, I'm John Human. I'm just your average guy—nothing fancy,
								nothing wild. I enjoy simple things: a good cup of coffee, quiet
								mornings, and learning something new every day. I don’t claim to
								be extraordinary, but I believe in doing my best and treating
								people with kindness. Whether I’m figuring out how to fix
								something or just taking a walk, I try to keep life
								straightforward and honest. I'm here, I exist, and I’m doing my
								thing—one day at a time."
							</p>
						</div>
					</div>
				</div>

				<div className="border-l-2 border-gray-600   p-2 h-full">
					<span className="text-xs text-[#343438]">Email me at:</span>
					<span className="text-sm ">jhonhuman001@gmail.com</span>
					<hr className="my-2" />
					<span className="text-xs text-[#343438]">Follow me on:</span>
					<div className="flex justify-between gap-2 items-center w-10">
						<img src="/Images/icons8-facebook-100.png" alt="" />
						{/* <img src="/Images/icons8-x-100.png" alt="" />
                <img src="/Images/icons8-linkedin-100.png" alt="" /> */}
					</div>
				</div>
			</section>
			<section className="border-1 border-dim-text w-200 h-auto rounded-sm p-2">
				<div className="h-full flex flex-col justify-between items-center gap-2 ">
					<div className="my-2 font-semibold text-heading-text ">Top Posts</div>

					<div className="bg-[#3b3b3f] w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out h-40 p-2 flex items-start justify-between">
						<div className="flex flex-col items-start justify-between">
							<div className="flex flex-col items-start justify-between">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1  text-heading-text">
									Beyond the Screen: Inside the Tech That Shapes Us
								</div>
								<p className="mb-1 w-120 h-18 text-dim-text text-xs overflow-hidden">
									From artificial intelligence breakthroughs to the ethics of
									machine learning, Neural Notes dives deep into the evolving
									landscape of smart technologies. Discover how algorithms,
									neural networks, and data science are transforming industries
									and shaping human potential — one byte at a time.
								</p>
							</div>
							<div className="h-08 w-21 flex items-center text-sm text-dim-text  p-1">
								<button className="rounded-[50%] ">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer "
									/>
								</button>
								<span>12</span>
								<button className=" ml-2 rounded-[50%]">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer rotate-[180deg] "
									/>
								</button>{" "}
								<span>5</span>
							</div>
						</div>
						<div className="w-[40%] h-36 ">
							<img
								src="/Images/MilkyWay.webp"
								alt=""
								className="h-[100%] w-[100%] rounded-sm"
							/>
						</div>
					</div>

					<div className="bg-[#3b3b3f] w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out h-40 p-2 flex items-start justify-between">
						<div className="flex flex-col items-start justify-between">
							<div className="flex flex-col items-start justify-between">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1  text-heading-text">
									Beyond the Screen: Inside the Tech That Shapes Us
								</div>
								<p className="mb-1 w-120 h-18 text-dim-text text-xs overflow-hidden">
									From artificial intelligence breakthroughs to the ethics of
									machine learning, Neural Notes dives deep into the evolving
									landscape of smart technologies. Discover how algorithms,
									neural networks, and data science are transforming industries
									and shaping human potential — one byte at a time.
								</p>
							</div>
							<div className="h-08 w-21 flex items-center text-sm text-dim-text  p-1">
								<button className="rounded-[50%] ">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer "
									/>
								</button>
								<span>12</span>
								<button className=" ml-2 rounded-[50%]">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer rotate-[180deg] "
									/>
								</button>{" "}
								<span>5</span>
							</div>
						</div>
						<div className="w-[40%] h-36 ">
							<img
								src="/Images/MilkyWay.webp"
								alt=""
								className="h-[100%] w-[100%] rounded-sm"
							/>
						</div>
					</div>

					<div className="bg-[#3b3b3f] w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out h-40 p-2 flex items-start justify-between">
						<div className="flex flex-col items-start justify-between">
							<div className="flex flex-col items-start justify-between">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1  text-heading-text">
									Beyond the Screen: Inside the Tech That Shapes Us
								</div>
								<p className="mb-1 w-120 h-18 text-dim-text text-xs overflow-hidden">
									From artificial intelligence breakthroughs to the ethics of
									machine learning, Neural Notes dives deep into the evolving
									landscape of smart technologies. Discover how algorithms,
									neural networks, and data science are transforming industries
									and shaping human potential — one byte at a time.
								</p>
							</div>
							<div className="h-08 w-21 flex items-center text-sm text-dim-text  p-1">
								<button className="rounded-[50%] ">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer "
									/>
								</button>
								<span>12</span>
								<button className=" ml-2 rounded-[50%]">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer rotate-[180deg] "
									/>
								</button>{" "}
								<span>5</span>
							</div>
						</div>
						<div className="w-[40%] h-36 ">
							<img
								src="/Images/MilkyWay.webp"
								alt=""
								className="h-[100%] w-[100%] rounded-sm"
							/>
						</div>
					</div>

					<div className="bg-[#3b3b3f] w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out h-40 p-2 flex items-start justify-between">
						<div className="flex flex-col items-start justify-between">
							<div className="flex flex-col items-start justify-between">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1  text-heading-text">
									Beyond the Screen: Inside the Tech That Shapes Us
								</div>
								<p className="mb-1 w-120 h-18 text-dim-text text-xs overflow-hidden">
									From artificial intelligence breakthroughs to the ethics of
									machine learning, Neural Notes dives deep into the evolving
									landscape of smart technologies. Discover how algorithms,
									neural networks, and data science are transforming industries
									and shaping human potential — one byte at a time.
								</p>
							</div>
							<div className="h-08 w-21 flex items-center text-sm text-dim-text  p-1">
								<button className="rounded-[50%] ">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer "
									/>
								</button>
								<span>12</span>
								<button className=" ml-2 rounded-[50%]">
									<img
										src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
										alt=""
										className="w-5 cursor-pointer rotate-[180deg] "
									/>
								</button>{" "}
								<span>5</span>
							</div>
						</div>
						<div className="w-[40%] h-36 ">
							<img
								src="/Images/MilkyWay.webp"
								alt=""
								className="h-[100%] w-[100%] rounded-sm"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Profile;
