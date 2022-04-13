import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import HeroBanner from "../components/HeroBanner";
import Howitworks from "../components/Howitworks";
import InfoSection from "../components/InfoSection";
import Reviews from "../components/Reviews";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<HeroBanner></HeroBanner>
			<Search />
			<InfoSection />
			<Howitworks />
			<About />
			<Reviews />
		</>
	);
}
