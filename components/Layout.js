import React from "react";
import ContactStrip from "./ContactStrip";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<div>
			<ContactStrip />
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
