import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Button className=" font-(family-name:--font-geist-sans)">hello shadcn</Button>
      <Button className=" font-(family-name:--font-geist-mono)">hello shadcn</Button>
      <Button className=" font-mono">hello shadcn</Button>
      <Button className=" font-display font-bold">hello shadcn</Button>
      <h1 className=" text-primary font-extrabold text-8xl font-display">Portfolio</h1>

    </div>
  );
}
