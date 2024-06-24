import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
    subsets:["latin"],
    weight:[ "200", "300","400","500","600","700","800",]
})

export function Logo() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="rounded-full p-3 bg-white">
                <Image src="/ghost.svg" alt="GameHub" width={60} height={60}/>
            </div>
            <div className={cn("flex flex-col  items-center justify-center", font.className)}>
                <p className="text-xl font-semibold">GameHub</p>
                <p className="text-sm text-muted-foreground">Let's play!</p>
            </div>
        </div>
    );
}
