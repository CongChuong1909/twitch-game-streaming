"use client"

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps{
    username: string,
    imageUrl: string,
    isLive: boolean
}
function UserItem({username, imageUrl, isLive}:UserItemProps) {
    const pathName = usePathname();

    const {show} = useSidebar(state => state);
    const href = `/${username}`;
    const isActive = pathName === href;
    return (
        <Button asChild variant='ghost' className={cn("w-full h-12", show ? "justify-center": "justify-start", isActive && "bg-accent")}>
            <Link href={href}>
                <div className={cn("flex items-center w-full gap-x-4", show && "justify-center")}>
                    <UserAvatar imageUrl = {imageUrl} username = {username} isLive = {isLive} showBadge/>
                </div>
            </Link>
        </Button>
    );
}

export default UserItem;