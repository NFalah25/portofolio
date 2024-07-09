import Link from "next/link";

function Navbar() {
	return (
		<nav>
			<div
				className={
					"bg-[#6e6ef7] fixed md:flex gap-14 items-center min-w-full justify-center font-bold text-2xl py-7 text-white shadow-md hidden"
				}>
				<Link href={"#"}>Home</Link>
				<Link href={"#"}>About</Link>
				<Link href={"#"}>Skill</Link>
				<Link href={"#"}>Project</Link>
			</div>

		</nav>
	);
}

export default Navbar;
