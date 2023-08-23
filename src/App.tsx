import Report from "./components/Report";
import ResultCard from "./components/ResultCard";

function App() {
	return (
		<main className="grid sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2  gap-5  ">
            <Report />
            <ResultCard imageIcon="images/icon-work.svg" background="bg-lightRedWork" title="Work"/>
            <ResultCard imageIcon="images/icon-play.svg" background="bg-softBlue" title="Play" />
            <ResultCard imageIcon="images/icon-study.svg" background="bg-lightRedStudy" title="Study" />
            <ResultCard imageIcon="images/icon-exercise.svg" background="bg-limeGreen" title="Exercise" />
            <ResultCard imageIcon="images/icon-social.svg" background="bg-violet" title="Social" />
            <ResultCard imageIcon="images/icon-self-care.svg" background="bg-softOrange" title="Self Care" />
		</main>
	);
}

export default App;
