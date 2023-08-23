type ReportProps = {
	type: "daily" | "weekly" | "monthly";
	setType: React.Dispatch<
		React.SetStateAction<"daily" | "weekly" | "monthly">
	>;
};

function Report({ type, setType }: ReportProps) {
	return (
		<section className="bg-darkBlue rounded-xl md:mx-0 sm:mx-auto sm:w-[200px]  md:w-[230px] lg:w-[270px] flex flex-col justify-between pb-4 md:col-start-auto md:col-end-auto lg:row-start-1 lg:row-end-3 md:row-start-1  md:row-end-4 sm:col-start-1 sm:col-end-3">
			<div className="p-2 bg-blue rounded-xl h-[70%] flex flex-col gap-y-8 pt-6 pl-6">
				<div className="">
					<img
						src="images/image-jeremy.png"
						className="rounded-full border-[3px] box-content border-[#fff] "
						width={100}
						alt=""
					/>
				</div>
				<article className="flex flex-col gap-y-2">
					<small className="text-paleBlue">Report for</small>
					<h1 className="text-xl sm:text-2xl md:text-5xl text-[#fff] font-light">
						<div className="">Jeremy</div>
						<div className="">Robson</div>
					</h1>
				</article>
			</div>
			<div className="flex flex-col items-start pl-6 gap-y-3">
				<button
					className={`hover:text-[#fff] ${
						type === "daily" && "text-[#fff]"
					}`}
					onClick={() => setType("daily")}
				>
					Daily
				</button>
				<button
					className={`hover:text-[#fff] ${
						type === "weekly" && "text-[#fff]"
					}`}
					onClick={() => setType("weekly")}
				>
					Weekly
				</button>
				<button
					className={`hover:text-[#fff] ${
						type === "monthly" && "text-[#fff]"
					}`}
					onClick={() => setType("monthly")}
				>
					Monthly
				</button>
			</div>
		</section>
	);
}

export default Report;
