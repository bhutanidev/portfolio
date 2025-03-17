import ContactForm from "@/components/custom/ContactForm";
import Footer from "@/components/custom/Footer";
import Links from "@/components/custom/Links";
import Navbar from "@/components/custom/Navbar";
import ProfileCard from "@/components/custom/Profile";
import Projects from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className=" md:mt-20">
        <ProfileCard/>
      </div>
      <Links/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

