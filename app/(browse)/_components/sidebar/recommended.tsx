"use client"
import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import UserItem from "./userItem";

interface RecommendedProps {
    data: User[]
}
function Recommended({data}:RecommendedProps ) {
    const {show} = useSidebar((state)=> state)
    const showLabel = !show && data.length>0
    return (
        <div>
            {
                showLabel &&(
                    <div className="pl-6 mb-4">
                        <p className="text-sm text-muted-foreground">
                            Recommended
                        </p>
                    </div>
                )
            }
            <ul className="space-y-2 px-2">
                {data.map((user)=>(
                    <UserItem key={user.id} username={user.username} imageUrl= {user.image} isLive = {true}/>
                ))}
            </ul>
        </div>
    );
}

export default Recommended;