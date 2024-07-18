"use client"
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "@/components/hint";

function ToggleButton() {
    const {show, onExpand, onShow} = useSidebar((state)=> state)
    const label = show? "Expand": "Collapsed"
    return (
        <>
            {
                show && <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                   <Hint label={label} align="center" side="right" asChild>
                        <Button onClick={onExpand} className="h-auto p-2 ml-auto" variant="ghost">
                            <ArrowRightFromLine className="w-4 h-4"/>
                        </Button>
                   </Hint>
                </div>   
            }
            {!show &&(
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className="font-semibold text-primary">
                        For you
                    </p>
                    <Hint label={label} align="center" side="right" asChild>
                    <Button onClick={onShow} className="h-auto p-2 ml-auto" variant="ghost">
                        <ArrowLeftFromLine className="h-4 w-4"/>
                    </Button>
                    </Hint>

                </div>
            )}
        </>
    );
}

export default ToggleButton;