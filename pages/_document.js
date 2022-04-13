import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta name="application-name" content="App" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
