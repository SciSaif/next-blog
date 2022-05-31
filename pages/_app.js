import NavBar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";

function App({Component, pageProps}) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
			</Head>
			<header>
				<NavBar />
			</header>
			<Component {...pageProps} />
		</>
	);
}

export default App;