import data from "@/data"
import Image from "next/image"

const Links=()=>{
    return(<>

    <div className=" w-full bg-primary h-10 md:h-17 flex justify-around items-center">
        {data.links.map((link)=>{
            return (<>
            <div key={link.name}>
                <Image src={link.icon} alt={link.name} width={35} height={35} />
            </div>
            </>)
        })}
    </div>
        
    </>)
}

export default Links