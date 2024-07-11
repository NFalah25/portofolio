import Link from "next/link";

function Navbar() {
	return (
		<nav>
			<div
				className={
					"bg-[#6e6ef7] fixed md:flex gap-14 items-center min-w-full justify-center font-bold text-2xl py-7 text-white shadow-md hidden"
				}>
				<Link href={"#home"} className="hover:text-orange-400 duration-300">Home</Link>
				<Link href={"#about"} className="hover:text-orange-400 duration-300">About</Link>
				<Link href={"#education"} className="hover:text-orange-400 duration-300">Education</Link>
				<Link href={"#project"} className="hover:text-orange-400 duration-300">Project</Link>
				<Link href={"#skill"} className="hover:text-orange-400 duration-300">Skill</Link>
				<Link href={"#contact"} className="hover:text-orange-400 duration-300">Contact</Link>
			</div>

		</nav>
	);
}

export default Navbar;
