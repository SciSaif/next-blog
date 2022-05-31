import React from "react";

function DarkTheme() {
	return (
		<style jsx global>
			{`
				/* Dark theme */
				:root {
					--background-color: rgb(18, 18, 18);
					--text-color: rgb(220, 220, 220);
					--link-color: rgb(222, 178, 3);
				}
			`}
		</style>
	);
}

export default DarkTheme;
