import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const getSeft = async() =>{
    const seft = await currentUser();
    if(!seft || !seft.username){
        throw new Error("unauthorized")
    }
    const user = await db.user.findUnique({
        where: {externalUserId: seft.id}
    })
    if(!user){
        throw new Error("not found")
    }

    return user
}
