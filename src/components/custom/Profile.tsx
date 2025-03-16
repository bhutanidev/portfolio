import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileCard() {
  return (
    <Card className="md:w-4/5 max-w-4/5 mx-auto p-6 border-none ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="text-white text-center md:text-left flex flex-col gap-4 ">
          <span className=" self-center font-display inline-block bg-primary text-black py-1 rounded-md  text-center text-sm font-bold px-3 md:self-start md:h-13 md:w-52 md:text-lg md:py-3 ">
            Hi there! I’m Dev!
          </span>
          <h2 className="text-5xl font-display text-primary font-bold mt-3">A Full Stack Developer</h2>
          <p className="mt-2 font-mono text-gray-300">
            With a background in game development, currently specializing in
            <span className="text-green-400 font-semibold"> C/C++</span> and
            <span className="text-green-400 font-semibold"> C#</span> development.
          </p>
          <p className="mt-2 font-mono text-gray-300">
            At my free time I play the guitar, record videos, and play computer games.
          </p>
          <p className="mt-2 font-mono text-gray-300">
            At my free time I play the guitar, record videos, and play computer games.
          </p>
        </div>
        <div className="relative w-40 h-40 md:w-60 md:h-60 md:justify-self-center rounded-lg overflow-hidden border-2  border-green-400">
          <Image
            src="/profile.jpg" // Change this to the actual image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Card>
  );
}