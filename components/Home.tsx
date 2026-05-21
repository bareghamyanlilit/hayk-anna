"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, name, txt1, txt2, txt3, txt4, txt5 } from "@/data/data";
import { motion } from "framer-motion";
import AttendanceGuests from "./RSVP";
import { Program } from "./Program";
import { Tables } from "./Tables";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-screen"} text-center overflow-hidden  FontArTarumianBarakU  bg-[#FFFDFB]`}
    >
      
      <div
        className={`${openEnvelope ? "animate-bounceYB" : ""} bg-center bg-cover z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <div
        className={`${openEnvelope ? "animate-bounceYT" : ""} bg-center bg-cover z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[60%] -translate-x-1/2 -translate-y-1/2 rotate-45  `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />

      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-49 p-1  rounded-2xl bg-[#fffdfb2f]  right-7 top-7 w-20  h-20 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto relative h-max max-w-md ">
        {/* arajin mas */}
        <div className="font-bold">
          <Image
            src="/img1.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-[95%] ml-0 h-[95vh] rounded-br-[220px]  object-cover "
          />
          <div className=" absolute top-18 left-10 flex items-center tracking-[25%]  justify-center ">
            <h2 className="text-3xl mb-23 text-[#FFFDFB] -mr-15">{name[0]}</h2>
            <span className="text-4xl  text-[#FFFDFB] "> և </span>
            <h2 className="text-3xl mt-23 text-[#FFFDFB]  -ml-15">{name[1]}</h2>
          </div>
        </div>

        {/* 2rd mas teqster */}
        <div className=" px-5 mt-15 tracking-[10%] flex items-center justify-between">
          <div>
            <motion.h3 {...anim} className=" text-sovorakan text-2xl">
              Սիրելիներս
            </motion.h3>
            <motion.p
              {...anim}
              className=" text-sovorakan  text-2xl mt-10 FontArTarumianBarakU"
            >
              {txt1}
            </motion.p>
          </div>

          <Image
            src="/or.png"
            width={500}
            height={500}
            alt="jamanak"
            className="w-[40%] mr-0 opacity-45"
          />
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full  text-3xl text-vrayi ">
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="px-10  my-20">
            <Image
              src="/img2.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className=" object-cover relative z-10"
            />
          </div>
          <div className="w-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-40 bg-guyn "></div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
        </div>

        <Calendar year={2026} month={6} highlightDay={20} />

        <Program />

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-30 relative w-full font-bold  text-3xl text-vrayi ">
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="px-10 my-20 h-max relative mb-60">
            <Image
              src="/img3.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[80%] "
            />
            <p className="absolute  -bottom-40 text-3xl tracking-[20%] leading-16 text-end right-10">
              {" "}
              {txt3}
            </p>
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
        </div>

        {/* hethashxvark */}
        <TimeBox />

        {/* erb asen teqst */}
        <motion.p
          {...anim}
          className="FontArTarumianBarakU mb-20 text-sovorakan  text-3xl mt-10"
        >
          {txt5}
        </motion.p>

        <motion.p
          {...anim}
          className="FontArTarumianBarakU mb-20 text-sovorakan  text-3xl mt-10"
        >
          {txt4}
        </motion.p>
      </div>

      <Footer />
    </div>
  );
}
