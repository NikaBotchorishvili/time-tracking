/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/data/data.json"],
	theme: {
        colors: {
            //   ### Primary
            blue: "hsl(246, 80%, 60%)",

            lightRedWork : "hsl(15, 100%, 70%)",            //  work
            softBlue : "hsl(195, 74%, 62%)",                //  play
            lightRedStudy : "hsl(348, 100%, 68%)",          //  study
            limeGreen: "hsl(145, 58%, 55%)",                //  exercise
            violet : "hsl(264, 64%, 52%)",                  //  social
            softOrange : "hsl(43, 84%, 65%)",               //  self care

            //   ### Neutral
            veryDarkBlue: "hsl(226, 43%, 10%)",
            darkBlue: "hsl(235, 46%, 20%)",
            desaturatedBlue: "hsl(235, 45%, 61%)",
            paleBlue: "hsl(236, 100%, 87%)",
        },
        fontFamily: {
            rubik: "'Rubik', sans-serif",
        },
		extend: {},
	},
	plugins: [],
};
