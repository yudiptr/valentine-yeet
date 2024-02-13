import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts";
import Image from "next/image";
export default function Home() {
  const line1 = `"Thanks for all the things u been thru w 'us', hopin more more days with u,My dear, my valentine's true."`;
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 flex flex-col gap-3">
          <TextGenerateEffect
            words={line1}
            className={`text-2xl md:text-3xl lg:text-8xl ${dancing_script.className}`}
          />
          <div className="flex justify-center">
            <Image
              src={"/lala.jpg"}
              alt="lala"
              width={400}
              height={300}/>
          </div>
          <TextGenerateEffect
            words={"love u lala jelek"}
            className={`text-2xl md:text-3xl text-bold lg:text-8xl`}
          />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
