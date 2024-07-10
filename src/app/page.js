import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
	return (
		<div className="text-white">
			<Navbar />
			<Hero />
			<About />
			<Education/>
			<Project/>
			<Skill/>
			<Footer/>
		</div>
	);
}
