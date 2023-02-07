import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/Hero.module.css";

const Hero = () => {
  const [show, setShow] = useState("mylk");
  const [test, setTest] = useState("the100");
  const [title, setTitle] = useState("MYLK");
  const [background, setBackground] = useState("top");

  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      event.deltaY > 0
        ? (setShow("mylk_top"),
          setTest("the100_top"),
          setTitle("THE 100%"),
          setBackground("bot"))
        : (setShow("mylk"),
          setTest("the100"),
          setTitle("MYLK"),
          setBackground("top"));
    });
  }, []);

  return (
    <section className="h-full">
      <div
        className={`${styles[show]} h-full w-full my-auto absolute items-center justify-center flex`}
      >
        <Image
          src={"/assets/MYLK-300x300.png"}
          alt="mylk"
          height={220}
          width={220}
          className=""
        />
      </div>
      <div
        className={`${styles[test]} h-full w-full my-auto absolute items-center justify-center flex`}
      >
        <Image
          src={"/assets/JAR_100-300x300.png"}
          alt="mylk"
          height={220}
          width={220}
          className=""
        />
      </div>
      <div
        className={`h-1/2 ${styles[background]} flex justify-center items-center`}
      >
        <h1 className="text-5xl opacity-100 duration-700">{title}</h1>
      </div>
      <div className="bg-[url('/assets/HOME_THE-100-BOT.jpg')] bg-cover h-1/2 flex flex-col justify-end gap-20 items-center p-10">
        <div className="bg-black p-4 font-bold z-10 cursor-pointer hover:bg-opacity-80">
          <span>VIEW PRODUCT</span>
        </div>
        <div className="text-center text-black font-bold">
          <p>
            MYLK allows you to make your own almond milk at home in one minute!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
