import { useEffect, useState } from "react";

const Marvel = () => {
	const [charac, setCharac] = useState();

	useEffect(() => {
		if (!navigator.onLine) {
			if (localStorage.getItem("charac") === null) {
				setCharac("Loading...");
			} else {
				setCharac(localStorage.getItem("charac"));
			}
		}

		fetch(
			"http://gateway.marvel.com/v1/public/characters/1010903?ts=1&apikey=c5263ec93b4f980ebc3dc541c2c5e067&hash=00c58346d893897e91cb570534ecc5fc"
		)
			.then((result) => result.json())
			.then((result) => {
				console.log("result", result);
			});
	}, []);

	return <h1>Character</h1>;
};

export default Marvel;
