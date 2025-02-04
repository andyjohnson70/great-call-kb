"use client";
import useSound from "use-sound";
import Image from "next/image";
import React from "react";
import tom from "../public/tom.jpeg";

export default function Home() {
  const [greatCallKB] = useSound("greatCallThereKb.mp3", { html5: true });
  const [aPlusThrow] = useSound("aPlusThrow.mp3", { html5: true });
  const [allAboutPoints] = useSound("allAboutPoints.mp3", { html5: true });
  const [andBeforeYouKnowIt] = useSound("andBeforeYouKnowIt.mp3", { html5: true });
  const [duckAndTurkey] = useSound("duckAndChicken.mp3", { html5: true });
  const [footrace] = useSound("footrace.mp3", { html5: true });
  const [gottaHaveIt] = useSound("gottaHaveIt.mp3", { html5: true });
  const [hardToGainYards] = useSound("hardToGainYards.mp3", { html5: true });
  const [itsAGameOfAttrition] = useSound("itsAGameOfAttrition.mp3", { html5: true });
  const [weekToWeekLeague] = useSound("itsAWeekToWeekLeague.mp3", { html5: true });
  const [jimmiesAndJoes] = useSound("jimmysAndJoes.mp3", { html5: true });
  const [letThePlayersPlay] = useSound("letThePlayersPlay.mp3", { html5: true });
  const [niceJobKB] = useSound("niceJobKb.mp3", { html5: true });
  const [noWhatAreTheyDoing] = useSound("noWhatAreTheyDoing.mp3", { html5: true });
  const [nothingsGivenToYou] = useSound("nothingsGivenToYou.mp3", { html5: true });
  const [ooohOoohAhhh] = useSound("ooohOooohAhhhh.mp3", { html5: true });
  const [recipeForSuccess] = useSound("recipeForSuccess.mp3", { html5: true });
  const [resumes] = useSound("resumes.mp3", { html5: true });
  const [scaryDude] = useSound("scaryDude.mp3", { html5: true });
  const [seenAQuarterbackEatAHotdog] = useSound("seenAQuarterbackEatAHotdog.mp3", { html5: true });
  const [starVChampion] = useSound("starVChampion.mp3", { html5: true });
  const [thisIsCrazy] = useSound("thisIsCrazy.mp3", { html5: true });
  const [yourAskingForTrouble] = useSound("urAsking4Trouble.mp3", { html5: true });
  const [wasntDaycare] = useSound("wasntDaycare.mp3", { html5: true });
  const [weCallThatAnAGap] = useSound("weCallThatAnAGap.mp3", { html5: true });
  const [what] = useSound("what.mp3", { html5: true });
  const [youGottaBeKiddingMe] = useSound("youGottaBeKiddingMe.mp3", { html5: true });
  const [iWasImpressed] = useSound("iWasImpressed.mp3", { html5: true });

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
  const play = () => {
    props.sound();
  }
  return (
    <button className="cursor-pointer text-sm sm:text-base border-white border-2 hover:bg-gray-500 p-2 rounded-md flex items-center break-words overflow-clip uppercase" onClick={play}>
      {props.title}
    </button>
  );
}

interface ButtonProps {
  title: string,
  sound(): unknown,
}