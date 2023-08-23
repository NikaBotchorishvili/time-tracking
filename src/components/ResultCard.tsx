type ResultCardProps = {
    title: string;
    background: string;
    imageIcon: string
    data: {current: number, previous: number}
}

function ResultCard({title, background, imageIcon, data}: ResultCardProps) {
    return (
        <article className=" w-full h-full rounded-xl bg-darkBlue hover:bg-blue">
            <div className={`${background} w-full h-[25%] overflow-hidden rounded-xl`}>
                <img src={imageIcon} className="ml-auto mr-5" alt="" />
            </div>
            <div className="w-[80%] mx-auto flex flex-col gap-1 lg:gap-3">
                <div className="flex mt-5 w-full justify-between items-center">
                    <h2>{title}</h2>
                    <img src="images/icon-ellipsis.svg" alt="" />
                </div>

                <div className="flex flex-row items-center justify-between lg:flex-col">
                    <h1 className="text-xl lg:text-5xl font-light">{data.current} hrs</h1>
                    <small>Last week - {data.previous} hrs</small>
                </div>
            </div>
        </article>
    );
}

export default ResultCard;