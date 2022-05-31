import {useState, useEffect} from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
	// if (typeof localStorage === "undefined") {
	// 	return false;
	// }
	const value = localStorage.getItem("darkMode");
	if (value == null) {
		return false;
	}
	return value === "true";
}

function ThemeSwitch() {
	const [darkMode, setDarkMode] = useState(false);
	const text = darkMode ? "Light Mode" : "Dark Mode";

	useEffect(() => {
		setDarkMode(loadDarkMode());
	}, []);

	const handleClick = () => {
		localStorage.setItem("darkMode", JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};

	return (
		<>
			<button onClick={handleClick}>{text}</button>
			<style jsx>
				{`
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: inherit;
                }}
            `}
			</style>

			{darkMode && <DarkTheme />}
		</>
	);
}

export default ThemeSwitch;
