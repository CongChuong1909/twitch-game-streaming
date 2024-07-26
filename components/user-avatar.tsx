import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LiveBadge from "@/components/live-badge";

//config when live the avatar is smaller
const avatarSizes = cva(
    "",
    {
        variants:{
            size:{
                default: "h-8 w-8",
                lg: "h-14 w-14"
            }
        },
        defaultVariants:{
            size: "default"
        },
    },
);

interface UserAvatarProps extends VariantProps<typeof avatarSizes>{
    imageUrl:string,
    username:string,
    isLive?:boolean,
    showBadge?:boolean 
}
function UserAvatar({imageUrl, username, isLive, showBadge, size}: UserAvatarProps) {
    const canShowBadge = showBadge && isLive;
    return (
        <div className="relative">
            <Avatar className={cn(isLive && "ring-2 ring-rose-500 border border-background", avatarSizes({size}))}>
                <AvatarImage src={imageUrl} className="object-cover"/>
                {/*image can't or slow loading avatar fallback is view*/}
                <AvatarFallback>
                    {username[0]}
                </AvatarFallback>
            </Avatar>
            {
                canShowBadge &&(
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                        <LiveBadge/>
                    </div>
                )
            }
        </div>
    );
}

export default UserAvatar;