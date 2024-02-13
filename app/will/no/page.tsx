import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  const line1 = `"Gamungkin seorang lala gamau"`;
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 flex flex-col gap-4">
          <TextGenerateEffect
            words={line1}
            className="text-2xl md:text-3xl lg:text-8xl"
          />
          <div className="flex justify-center gap-3">
            <Marquee className="flex justify-center gap-3" speed={200}>
              <div className="flex justify-center gap-5">
                  <Image
                    className="rounded-xl border-2"
                    src={"/lala6.jpg"}
                    alt="lala"
                    width={200}
                    height={100}
                  />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
