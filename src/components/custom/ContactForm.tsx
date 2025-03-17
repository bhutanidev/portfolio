import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 py-10">
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-primary font-display">Get In Touch</h1>
        <p className="mt-4 text-lg font-mono">
          Searching for the last piece to perfect your team?
          Let’s chat – I might be the one!
        </p>
        <div className=" hidden md:flex flex-col items-center justify-between mt-3">
            <div className=" w-64 mx-auto md:mx-0">
                <Image src={"/connect.png"}  alt="Lets's Connect" width={400} height={400}/>
            </div>

        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-muted/50 p-6 rounded-lg shadow-lg w-full max-w-md">
        <Input className="mb-4 font-mono" placeholder="Name" />
        <Input className="mb-4 font-mono " type="email" placeholder="Email" />
        <Textarea className="mb-4 font-mono h-24" placeholder="Message" />
        <div className="flex items-start space-x-2 mb-4">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm font-mono">
            By clicking "Submit", you give me permission to store your data and contact you. Your information will never be shared with others.
          </label>
        </div>
        <Button className="w-full bg-primary text-black hover:bg-green-600">Submit</Button>
      </div>
    </div>
  );
}
