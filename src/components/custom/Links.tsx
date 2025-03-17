import data from "@/data"
import Image from "next/image"

const Links=()=>{
    return(<>

    <div className=" w-full bg-primary h-10 md:h-17 flex justify-around items-center">
        {data.links.map((link)=>{
            return (
            <a href={link.url} key={link.name} target="_blank">
                <Image src={link.icon} alt={link.name} width={35} height={35} />
            </a>
            )
        })}
    </div>
        
    </>)
}

export default Links