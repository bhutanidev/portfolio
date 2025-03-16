import Links from "@/components/custom/Links";
import Navbar from "@/components/custom/Navbar";
import ProfileCard from "@/components/custom/Profile";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.7) 20%,transparent 70%), radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.9) 20%,transparent 70%)]">
      <Navbar />
      <div className=" md:mt-20">
        <ProfileCard/>
      </div>
      <Links/>
    </div>
  );
}
