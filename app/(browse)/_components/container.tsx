"use client"

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

function Container({children}: {children:React.ReactNode}) {
    const {show, onShow, onExpand} = useSidebar((state)=> state)
    //trigger auto on translate mobile and desktop
    const matches = useMediaQuery("(max-width: 1024px)")
    useEffect(()=>{
        if(matches){
            onShow();
        }
        else{
            onExpand(); 
        }
    }, [matches, onShow, onExpand])
    return (
        <div className={cn("flex-1", show ? "ml-[70px]": "ml-[70px] lg:ml-60")}>
            {children}
        </div>
    );
}

export default Container;