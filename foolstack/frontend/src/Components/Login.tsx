const Login = () => {
	return (
		<section className="bg-[#1a1a1d]  rounded-xl p-10 w-full max-w-md  animate-fade-in-up shadow-cornflower m-auto">
			<h1 className="text-3xl font-bold text-center mb-3 text-white">
				Sign In
			</h1>
			<p className="text-center text-sm text-gray-400 mb-6">
				Use your Google account to continue
			</p>

			<button className="w-full bg-gray-200 text-black font-medium py-2 px-4 rounded  hover:bg-gray-400 transition-all duration-150 ease-in-out flex items-center justify-center gap-2">
				<img
					src="https://www.svgrepo.com/show/475656/google-color.svg"
					className="w-5 h-5"
					alt="Google"
				/>
				Continue with Google
			</button>
		</section>
	);
};

export default Login;
