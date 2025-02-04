"use client";
import useSound from "use-sound";
import Image from "next/image";
import tom from "../public/tom.jpeg";

export default function Home() {
  const [greatCallKB] = useSound("greatCallThereKb.m4a");
  const [aPlusThrow] = useSound("aPlusThrow.m4a");
  const [allAboutPoints] = useSound("allAboutPoints.m4a");
  const [andBeforeYouKnowIt] = useSound("andBeforeYouKnowIt.m4a");
  const [duckAndTurkey] = useSound("duckAndChicken.m4a");
  const [footrace] = useSound("footrace.m4a");
  const [gottaHaveIt] = useSound("gottaHaveIt.m4a");
  const [hardToGainYards] = useSound("hardToGainYards.m4a");
  const [itsAGameOfAttrition] = useSound("itsAGameOfAttrition.m4a");
  const [weekToWeekLeague] = useSound("itsAWeekToWeekLeague.m4a");
  const [jimmiesAndJoes] = useSound("jimmysAndJoes.m4a");
  const [letThePlayersPlay] = useSound("letThePlayersPlay.m4a");
  const [niceJobKB] = useSound("niceJobKb.m4a");
  const [noWhatAreTheyDoing] = useSound("noWhatAreTheyDoing.m4a");
  const [nothingsGivenToYou] = useSound("nothingsGivenToYou.m4a");
  const [ooohOoohAhhh] = useSound("ooohOooohAhhhh.m4a");
  const [recipeForSuccess] = useSound("recipeForSuccess.m4a");
  const [resumes] = useSound("resumes.m4a");
  const [scaryDude] = useSound("scaryDude.m4a");
  const [seenAQuarterbackEatAHotdog] = useSound("seenAQuarterbackEatAHotdog.m4a");
  const [starVChampion] = useSound("starVChampion.m4a");
  const [thisIsCrazy] = useSound("thisIsCrazy.m4a");
  const [yourAskingForTrouble] = useSound("urAsking4Trouble.m4a");
  const [wasntDaycare] = useSound("wasntDaycare.m4a");
  const [weCallThatAnAGap] = useSound("weCallThatAnAGap.m4a");
  const [what] = useSound("what.m4a");
  const [youGottaBeKiddingMe] = useSound("youGottaBeKiddingMe.m4a");
  const [iWasImpressed] = useSound("iWasImpressed.m4a");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-row">
          <div className="text-6xl sm:text-8xl font-bold cursor-pointer underline inline-block" onClick={() => {greatCallKB()}}>
            great call, kb
          </div>
          <Image className="inline-block max-h-[11rem] sm:absolute sm:top-10 sm:right-20 w-auto" src={tom} alt="tom" />
        </div>
        
        <div>
          a tom brady cliché soundboard
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-4">
          <Button title="nice job, kb" sound={niceJobKB} />
          <Button title="when you gotta have it" sound={gottaHaveIt} />
          <Button title="jimmys and joes" sound={jimmiesAndJoes} />
          <Button title="oooh oooh ahhh" sound={ooohOoohAhhh} />
          <Button title="seen a quartback eating a hotdog" sound={seenAQuarterbackEatAHotdog} />
          <Button title="star vs a champion" sound={starVChampion} />
          <Button title="this is crazy" sound={thisIsCrazy} />
          <Button title="what" sound={what} />
          <Button title="duck and chicken" sound={duckAndTurkey} />
          <Button title="nothing is given to you" sound={nothingsGivenToYou} />
          <Button title="let the players play" sound={letThePlayersPlay} />
          <Button title="this wasn't daycare" sound={wasntDaycare} />
          <Button title="we call that an a gap" sound={weCallThatAnAGap} />
          <Button title="all about points" sound={allAboutPoints} />
          <Button title="a plus throw" sound={aPlusThrow} />
          <Button title="you gotta be kidding me" sound={youGottaBeKiddingMe} />
          <Button title="scary dude" sound={scaryDude} />
          <Button title="recipe for success" sound={recipeForSuccess} />
          <Button title="you're asking for trouble" sound={yourAskingForTrouble} />
          <Button title="footrace" sound={footrace} />
          <Button title="and before you know it" sound={andBeforeYouKnowIt} />
          <Button title="hard to gain yards in the nfl" sound={hardToGainYards} />
          <Button title="week to week league" sound={weekToWeekLeague} />
          <Button title="it's a game of attrition" sound={itsAGameOfAttrition} />
          <Button title="resumes" sound={resumes} />
          <Button title="no, what are they doing" sound={noWhatAreTheyDoing} />
          <Button title="i was impressed" sound={iWasImpressed} />
        </div>
      </main>
    </div>
  );
}


function Button(props : ButtonProps) {
  return (
    <button className="cursor-pointer text-sm sm:text-base border-white border-2 hover:bg-gray-500 p-2 rounded-md flex items-center break-words overflow-clip uppercase" onClick={() => {props.sound()}}>
      {props.title}
    </button>
  );
}

interface ButtonProps {
  title: string,
  sound(): unknown,
}