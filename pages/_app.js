import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/ubuntu/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "../styles/globals.css";
const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};
import { Fonts } from "../components/Fonts";
const theme = extendTheme({
	colors,
	fonts: {
		heading: "Ubuntu",
		body: "Raleway",
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
