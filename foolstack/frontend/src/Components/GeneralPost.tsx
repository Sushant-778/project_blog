import { useLocation } from "react-router";

const GeneralPost = () => {
	const location = useLocation();
	const trending = location.pathname === "/posts/trending"; // 👈 detect from path

	console.log("Trending?", trending);

	return (
		<main className="w-[60dvw] m-auto">
			<article className="mb-15 flex flex-col justify-center  ">
				<header className="text-dim-text">
					<h1 className="font-raleway text-3xl font-bold text-heading-text leading-8 mb-1">
						Neural Notes: Decoding the Future of Intelligence <br />
					</h1>
					<h2 className="text-xs font-light  text-dim-text">John Human</h2>
					<time className=" text-xs font-light"> May 6, 2025</time>

					<p className="text-sm font-raleway leading-5 my-5">
						In the age of digital transformation, artificial intelligence (AI)
						is more than a buzzword—it's a revolution reshaping the way we live,
						work, and connect. Neural Notes is your guide through this dynamic
						world, exploring the breakthroughs, challenges, and ethical
						considerations of smart technologies. From machine learning
						algorithms to neural networks, we uncover the systems powering the
						next wave of innovation.
					</p>
				</header>
				<figure>
					<img src="/Images/MilkyWay.webp" alt="" className="w-full h-100" />
				</figure>
				<section className="mt-8 font-raleway text-heading-text text-base leading-6">
					<h2 className="text-xl font-semibold mt-5 ">
						The Rise of Algorithms and Neural Networks
					</h2>
					<p>
						At the heart of this transformation are algorithms—sets of rules
						that allow computers to learn from data and make decisions. Neural
						networks, modeled after the human brain, enable machines to
						recognize patterns, process language, and even create art. These
						technologies have found their way into everything from search
						engines and recommendation systems to self-driving cars and
						healthcare diagnostics.
					</p>

					<h2 className="text-xl font-semibold mt-5">
						Ethical Considerations in Machine Learning
					</h2>
					<p>
						As powerful as these systems are, they also raise serious ethical
						questions. Who is responsible when an AI makes a flawed decision?
						How do we ensure transparency in opaque models like deep neural
						networks? And most importantly, how do we prevent biases in data
						from reinforcing social inequalities? Neural Notes seeks to unpack
						these questions, promoting a responsible and inclusive future for AI
						development.
					</p>

					<h2 className="text-xl font-semibold mt-5">
						Transforming Industries, Expanding Potential
					</h2>

					<p>
						From finance and logistics to education and medicine, AI is
						transforming entire industries. Startups and tech giants alike are
						leveraging data science to optimize operations, personalize user
						experiences, and predict future trends. But beyond the boardrooms
						and labs, these technologies are also expanding human potential,
						assisting people with disabilities, enabling real-time translation,
						and opening up new creative frontiers.
					</p>

					<h2 className="text-xl font-semibold mt-5">
						Conclusion: One Byte at a Time
					</h2>
					<p>
						As AI continues to evolve, its influence will only grow deeper and
						more complex. At Neural Notes, we believe in critically engaging
						with this technology—not just using it. Join us as we chart the path
						forward, exploring the frontiers of intelligence, one byte at a
						time.
					</p>
				</section>
			</article>

			<section
				className="h-50 
                    flex justify-between gap-5 ">
				<div className="w-[50%] flex flex-col justify-start gap-3  p-2 rounded-sm bg-[#3b3b3f] text-dim-text text-sm">
					<div className="h-[20%] flex items-center ">
						<button className="rounded-[50%] ">
							<img
								src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
								alt=""
								className="w-7 cursor-pointer "
							/>
						</button>
						<span>12</span>
						<button className=" ml-2 rounded-[50%]">
							<img
								src="/Images/icons8-thick-arrow-pointing-up-96 (2).png"
								alt=""
								className="w-7 cursor-pointer rotate-[180deg] "
							/>
						</button>{" "}
						<span>5</span>
					</div>
					<hr className="border-cornflowerblue" />
					<div className="h-[80%] flex gap-2 font-raleway">
						<div className="">
							{" "}
							<img
								src="/Images/icons8-male-user-100.png"
								alt=""
								className="w-25"
							/>
						</div>
						<div className="">
							<h3 className="text-lg text-heading-text">John Human</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Debitis accusantium fugiat quae tenetur tempore quaerat!
								Quisquam eos libero sit eius
							</p>
						</div>
					</div>
				</div>
				<div className="w-[50%] ">
					<textarea
						className="h-full w-full rounded-sm border border-gray-400 focus:border-cornflowerblue p-3 text-sm focus:outline-none resize-none text-heading-text"
						placeholder="Add a comment..."></textarea>
				</div>
			</section>

			<section className="my-5">
				<div>
					<h2 className="text-heading-text font-semibold my-2">
						More Like This
					</h2>
				</div>
				<div className=" flex  items-center gap-5">
					<div className="p-2 h-auto w-60 rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item1 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
						<div className="w-auto h-auto flex flex-col">
							<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
							<div className="font-raleway text-lg font-bold text-heading-text leading-5 mb-1">
								The Circuit Breaker: Hacking Through the Digital Maze
							</div>
							<div className="text-xs font-extralight mb-2 text-dim-text">
								- John Human
							</div>
							<div>
								<p className="mb-1 h-8 text-dim-text text-xs overflow-hidden">
									Unravel the world of computer hardware, cybersecurity, and
									underground tech culture. The Circuit Breaker offers sharp
									takes, tutorials, and analysis on the ever-shifting digital
									terrain — where code meets creativity, and security meets
									strategy.
								</p>
							</div>
						</div>
					</div>
					<div className="p-2 h-auto w-60 rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item1 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
						<div className="w-auto h-auto flex flex-col">
							<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
							<div className="font-raleway text-lg font-bold text-heading-text leading-5 mb-1">
								The Circuit Breaker: Hacking Through the Digital Maze
							</div>
							<div className="text-xs font-extralight mb-2 text-dim-text">
								- John Human
							</div>
							<div>
								<p className="mb-1 h-8 text-dim-text text-xs overflow-hidden">
									Unravel the world of computer hardware, cybersecurity, and
									underground tech culture. The Circuit Breaker offers sharp
									takes, tutorials, and analysis on the ever-shifting digital
									terrain — where code meets creativity, and security meets
									strategy.
								</p>
							</div>
						</div>
					</div>
					<div className="p-2 h-auto w-60 rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item1 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
						<div className="w-auto h-auto flex flex-col">
							<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
							<div className="font-raleway text-lg font-bold text-heading-text leading-5 mb-1">
								The Circuit Breaker: Hacking Through the Digital Maze
							</div>
							<div className="text-xs font-extralight mb-2 text-dim-text">
								- John Human
							</div>
							<div>
								<p className="mb-1 h-8 text-dim-text text-xs overflow-hidden">
									Unravel the world of computer hardware, cybersecurity, and
									underground tech culture. The Circuit Breaker offers sharp
									takes, tutorials, and analysis on the ever-shifting digital
									terrain — where code meets creativity, and security meets
									strategy.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default GeneralPost;
