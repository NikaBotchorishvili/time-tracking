import Report from "./components/Report";
import ResultCard from "./components/ResultCard";
import data from "./data/data.json";
import { useState } from "react";
function App() {
	const [type, setType] = useState<"daily" | "weekly" | "monthly">("daily");
	const ResultCards = data.map((category, id) => {
		return (
			<ResultCard
                        key={id}
				data={category.timeframes[type]}
				imageIcon={category.imageIcon}
                        title={category.title}
                        background={category.background}
			/>
		);
	});
	return (
		<main className="grid  gap-5 sm:grid-rows-2 sm:grid-cols-[repeat(2,250px)] md:grid-rows-3 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 ">
			<Report type={type} setType={setType} />
                  {ResultCards}
		</main>
	);
}

export default App;
