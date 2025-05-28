import { Link } from "react-router";

const Hero = () => {
	return (
		<>
			<nav className="w-full p-4 flex justify-between h-40">
				<span className="text-heading-text font-raleway">
					Blogging What{" "}
					<span className=" border-b-4 border-cornflowerblue ">Echoes.</span>
				</span>
				<div className="flex justify-between gap-8 text-normal-text">
					<Link
						to="/"
						className="p-1 no-underline hover:border-b-3 hover:border-b-cornflowerblue transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
						Home
					</Link>
					<Link
						to="/posts"
						className="p-1 no-underline hover:border-b-3 hover:border-b-cornflowerblue transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
						Latest
					</Link>
					<Link
						to="/posts/trending"
						className="p-1 no-underline hover:border-b-3 hover:border-b-cornflowerblue transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
						Trending
					</Link>
					<div className="relative inline-block">
						<button
							className="rounded-[50%] w-8 h-8 text-black cursor-pointer"
							onClick={() => {
								document.getElementById("dropdown")!.classList.toggle("hidden");
							}}>
							<img src="/Images/icons8-male-user-100.png" alt="Accounts" />
						</button>

						<div
							id="dropdown"
							className="w-50 bg-[#38383e] text-white shadow-soft rounded-sm absolute -left-3/2 -translate-x-1/2  hidden z-10">
							<div className="p-2 flex flex-col ">
								<h2 className="text-base text-center font-semibold">
									Accounts
								</h2>
								<hr />
								<Link
									to="/login"
									className="mt-2 p-2 rounded-sm text-left text-xs hover:bg-[#6494edd5]">
									Add a different account
								</Link>
								<Link
									to="/login"
									className=" p-2 rounded-sm text-left text-xs hover:bg-[#6494edd5]">
									Sign out
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<section className="z-0 w-full flex items-center justify-between mt-4">
				<h1 className="font-gothic text-7xl text-heading-text [word-spacing:0.75rem]">
					BENEATH
					<br />
					THE SYNTAX
				</h1>
				<span className="font-raleway text-sm text-dim-text -ml-40">
					ramblings,
					<br />
					insights,
					<br />
					and accidental truths <br />— one post at a time.
				</span>

				<div className="bg-[#3b3b3f] p-2 rounded-sm h-30 flex flex-col items-center justify-between shadow-cornflower">
					<img src="/Images/icons8-create-100.png" alt="" className="w-8" />
					<span className="text-xs text-gray-300">
						Share your thoughts... <br />
					</span>
					<Link
						className="w-full p-1 rounded-xs no-underline text-sm text-gray-200 font-raleway shadow-soft-1 hover:bg-[cornflowerblue] hover:text-section-color flex justify-center items-center"
						to="/create">
						Create a Blog
					</Link>
				</div>
			</section>

			<section className="w-full h-100  rounded-sm text-heading-text  flex items-center justify-between gap-2  relative">
				{" "}
				<div
					className="absolute -left-19 top-7 bg-[#3b3b3f] shadow-soft  p-2 font-raleway rounded-sm rotate-[-90deg]
                   border-b-4 border-b-cornflowerblue ">
					Most Liked
				</div>
				<div className="w-[60%] h-full  p-2 rounded-md shadow-soft  flex flex-col trending-grid-item1 ">
					<div className="p-2 h-full w-full rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] flex flex-col  hover:shadow-soft-hover transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out ">
						<div className="w-auto h-auto flex flex-col">
							<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
							<div className="font-raleway text-lg font-bold leading-5 mb-1">
								Neural Notes: Decoding the Future of Intelligence
							</div>
							<div className="text-xs font-extralight mb-2">- John Human</div>
							<div>
								<p className="mb-1 h-8 text-dim-text text-xs overflow-hidden">
									From artificial intelligence breakthroughs to the ethics of
									machine learning, Neural Notes dives deep into the evolving
									landscape of smart technologies. Discover how algorithms,
									neural networks, and data science are transforming industries
									and shaping human potential — one byte at a time.
								</p>
							</div>
						</div>
						<div className="overflow-hidden">
							<img
								src="/Images/MilkyWay.webp"
								alt=""
								className="h-[100%] w-[100%] rounded-md"
							/>
						</div>
					</div>
				</div>
				<div
					className="w-[40%] h-full p-2 shadow-soft border-4 border-y-0 border-r-0 border-l-cornflowerblue 
      rounded-tr-md rounded-br-md  ">
					<div className="h-full flex flex-col justify-between items-center gap-2 ">
						<div className="bg-[#3b3b3f] h-full w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out">
							<div className="w-auto h-auto p-2 flex flex-col">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1">
									Beyond the Screen: Inside the Tech That Shapes Us
								</div>
								<div className="text-xs font-extralight ">- John Human</div>
							</div>
						</div>
						<div className="bg-[#3b3b3f] h-full w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out">
							<div className="w-auto h-auto p-2 flex flex-col">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1">
									Cosmos & Code: The Science Behind Our Systems
								</div>
								<div className="text-xs font-extralight ">- John Human</div>
							</div>
						</div>
						<div className="bg-[#3b3b3f] h-full w-full grow rounded-xs transition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out">
							<div className="w-auto h-auto p-2 flex flex-col ">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1">
									Silicon Insights: Exploring the Digital Frontier
								</div>
								<div className="text-xs font-extralight ">- John Human</div>
							</div>
						</div>
						<div className="bg-[#3b3b3f] h-full w-full grow rounded-xstransition delay-50 hover:-translate-y-0.5 hover:scale-101 ease-in-out">
							<div className="w-auto h-auto p-2 flex flex-col">
								<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
								<div className="font-raleway text-lg font-bold leading-5 mb-1">
									Code & Current: The Pulse of Modern Tech
								</div>
								<div className="text-xs font-extralight ">- John Human</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="trending-section text-heading-text w-full bg-transparent p-2 rounded-sm grid grid-cols-5 grid-rows-3 gap-4 shadow-soft relative">
				{" "}
				<div
					className="absolute -left-17 top-5 bg-[#3b3b3f] shadow-soft  p-2 px-3 font-raleway rounded-sm rotate-[-90deg] 
                      border-b-4 border-b-cornflowerblue">
					Trending
				</div>
				<div className="p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item1 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					<div className="w-auto h-auto flex flex-col">
						<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
						<div className="font-raleway text-lg font-bold leading-5 mb-1">
							The Circuit Breaker: Hacking Through the Digital Maze
						</div>
						<div className="text-xs font-extralight mb-2">- John Human</div>
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
					<div className="overflow-hidden">
						<img
							src="/Images/MilkyWay.webp"
							alt=""
							className="h-[100%] w-[100%] rounded-md"
						/>
					</div>
				</div>
				<div className="p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item2 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					<div className="w-auto h-auto flex flex-col">
						<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
						<div className="font-raleway text-lg font-bold leading-5 mb-1">
							The Quantum Loop: Science, Simulated & Real
						</div>
						<div className="text-xs font-extralight mb-2">- John Human</div>
					</div>
					<div>
						<p className="mb-1 max-h-8 text-dim-text text-xs overflow-hidden">
							Explore the boundary between theoretical physics and applied
							technology. The Quantum Loop covers quantum computing, cosmology,
							simulations, and cutting-edge research that’s reshaping how we
							understand matter, time, and information.
						</p>
					</div>
					<div className="overflow-hidden">
						<img
							src="/Images/MilkyWay.webp"
							alt=""
							className="h-[100%] w-[100%] rounded-md"
						/>
					</div>
				</div>
				<div className="p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item3 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					<div className="w-auto h-auto flex flex-col">
						<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
						<div className="font-raleway text-lg font-bold leading-5 mb-1">
							Bitstream Chronicle: Tracking the Pulse of Technology
						</div>
						<div className="text-xs font-extralight mb-2">- John Human</div>
					</div>
					<div>
						<p className="mb-1 max-h-8 text-dim-text text-xs overflow-hidden">
							A journal of trends, tools, and tech culture. Bitstream Chronicle
							delivers regular insights into everything from processor wars to
							open-source movements — decoding the digital world one headline at
							a time.
						</p>
					</div>
					<div className="overflow-hidden">
						<img
							src="/Images/MilkyWay.webp"
							alt=""
							className="h-[100%] w-[100%] rounded-md"
						/>
					</div>
				</div>
				<div className="p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item4 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					<div className="w-auto h-auto flex flex-col">
						<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
						<div className="font-raleway text-lg font-bold leading-5 mb-1">
							TechnoVerse: Mapping the Science of Everything
						</div>
						<div className="text-xs font-extralight mb-2">- John Human</div>
					</div>
					<div>
						<p className="mb-1 max-h-8 text-dim-text text-xs overflow-hidden">
							Where technology meets science fiction — and fact. TechnoVerse
							explores robotics, space tech, biotech, and scientific marvels
							that blur the line between imagination and innovation. Dive in for
							deep reads and breakthrough discoveries.
						</p>
					</div>
					<div className="overflow-hidden">
						<img
							src="/Images/MilkyWay.webp"
							alt=""
							className="h-[100%] w-[100%] rounded-md"
						/>
					</div>
				</div>
				<div className="p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col trending-grid-item5 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					<div className="w-auto h-auto flex flex-col">
						<div className="text-[0.6rem] text-dim-text">1-1-2025</div>
						<div className="font-raleway text-lg font-bold leading-5 mb-1">
							Logic & Light: Where Science Sparks Innovation
						</div>
						<div className="text-xs font-extralight mb-2">- John Human</div>
					</div>
					<div>
						<p className="mb-1 max-h-8 text-dim-text text-xs overflow-hidden">
							From quantum bits to bioengineered breakthroughs, Logic & Light
							illuminates the ideas driving modern science and technology.
							Explore how logic gates, light-speed networks, and deep scientific
							thought converge to shape the tools, theories, and futures we’re
							building today.
						</p>
					</div>
					<div className="overflow-hidden">
						<img
							src="/Images/MilkyWay.webp"
							alt=""
							className="h-[100%] w-[100%] rounded-md"
						/>
					</div>
				</div>
				<div className="p-2 h-80 w-auto rounded-md bg-gradient-to-r from-[#3e3f43] to-[#292b2b] shadow-soft hover:shadow-soft-hover flex flex-col items-center justify-center trending-grid-item6 transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					<p className="text-dim-text text-2xl font-raleway">See More</p>
				</div>
			</section>
		</>
	);
};

export default Hero;
