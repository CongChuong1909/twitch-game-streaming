"use client"
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import ToggleButton from "./toggleButton";
 
interface WrapperProps{
    children: React.ReactNode
}
function Wrapper({children}: WrapperProps) {
    const {show} = useSidebar((state)=> state)

    return (
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50", show && "w-[70px]")}>
            {children}
            
        </aside>
    );
}

export default Wrapper;