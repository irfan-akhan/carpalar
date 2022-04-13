import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FaUser } from "react-icons/fa";
export default function Navbar() {
	return (
		<navbar className={styles.navbar}>
			<div className={styles.logo}>carpalar</div>

			<nav className={styles.nav}>
				<ul className={styles.unorderedlist}>
					<li className={styles.list}>
						<Link href="/">Home </Link>
					</li>

					<li className={styles.list}>
						<Link href="/">Explore cars </Link>
					</li>

					<li className={styles.list}>
						<Link href="/aboutus">About us </Link>
					</li>

					<li className={styles.list}>
						<Link href="#howitworks">How it works</Link>
					</li>

					<li className={styles.list}>
						<Link href="/">
							<FaUser />
						</Link>
					</li>
				</ul>
			</nav>
		</navbar>
	);
}
