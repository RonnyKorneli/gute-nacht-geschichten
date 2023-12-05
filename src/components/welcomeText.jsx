

export default function WelcomeText(){

    return(
        <div className="w-full mt-12 flex justify-center rounded-3xl">
            <div className="w-[95%] flex flex-col rounded-3xl justify-center items-center lg:w-[70%]">
                <h1 className="font-[700] text-center text-4xl lg:text-5xl mb-8">Zauberhafte Kindergeschichten zum Vorlesen! </h1>
                 <p className="text-xl font-[400] text-center leading-10">
                    Auf dieser Website entdeckst du faszinierende Erzählungen, die sowohl für die Kleinen als auch die Großen geeignet sind. 
                </p>
                <p className="text-xl font-[400] text-center leading-10">
                    Ob du sie einfach zwischendurch zur Entspannung 
                    liest oder als {"Gute Nacht"}-
                    Geschichte am Abend, diese kindgerechten Geschichten sind immer eine gute Wahl.
                </p>
                <p className="text-xl font-[400] mt-6 text-center leading-10">
                    Wir hoffen, dass du beim Lesen jede Menge Freude hast!
                </p>
            </div>
        </div>
    )
}