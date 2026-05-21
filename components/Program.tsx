import { anim, program } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Program() {
  return (
    <div className="FontArTarumianBarakU py-5 tracking-[25%]">
      <motion.h3 {...anim} className=" relative text-2xl font-bold mb-30">
        ժԱՄԱՆԱԿԱՑՈՒՅՑ
        <p className=" absolute -z-1 text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#5800001A]">
          ժԱՄԱՆԱԿԱՑՈՒՅՑ
        </p>
      </motion.h3>
      <div className="flex flex-col ">
        {program.map((el: any, i: number) => {
          return (
            <div
              key={i}
              className={`${i % 2 == 0 ? "flex-row-reverse" : ""} flex items-center justify-between`}
            >
              <Image
                src={el.img}
                width={500}
                height={500}
                alt="jamanak"
                className="w-[40%]"
              />

              <Link
                href={`${el.address ? `https://www.google.com/maps/search/${el.address}` : "#"}`}
                className={`${i % 2 == 0 ? "text-start" : "text-end"} px-7 self-center `}
              >
                <motion.h2 {...anim} className="tracking-[25%] text-4xl">
                  {el.time}
                </motion.h2>
                <motion.p
                  {...anim}
                  className="tracking-[25%] my-2 text-2xl font-bold relative"
                >
                  {el.title}
                </motion.p>
                <motion.h3
                  {...anim}
                  className={`${i % 2 != 0 ? "flex-row-reverse " : " "} tracking-[25%] flex justify-start gap-2 items-center text-lg`}
                >
                  <span>Հասցե</span>
                  <Image
                    src="/icon3.png"
                    alt="icon1"
                    width={500}
                    height={500}
                    className=" w-5 h-5 object-cover"
                  />
                </motion.h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
