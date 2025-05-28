import { Link } from "react-router";

const Header = () => {
	return (
		<nav
			className="
    w-full p-4 flex items-center justify-between px-4 h-40">
			<div className=" py-0 px-3 border-r-6  border-r-cornflowerblue flex justify-center">
				<Link
					to="/"
					className="text-heading-text font-gothic font-extrabold text-3xl leading-6 space-x-5 ">
					<span>
						BT <br /> SX
					</span>
				</Link>
			</div>

			<div className=" h-[50%] flex justify-between gap-8 font-raleway font-semibold text-sm text-normal-text ">
				<Link
					to="/"
					className="p-1 no-underline hover:border-b-3 hover:border-b-cornflowerblue transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out ">
					Home
				</Link>
				<a
					href="/posts"
					className="p-1 no-underline hover:border-b-3 hover:border-b-cornflowerblue transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					Latest
				</a>
				<a
					href="/posts/trending"
					className="p-1 no-underline hover:border-b-3 hover:border-b-cornflowerblue transition delay-75 hover:-translate-y-0.5 hover:scale-102 ease-in-out">
					Trending
				</a>
			</div>
		</nav>
	);
};

export default Header;
