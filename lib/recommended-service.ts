import { db } from "@/lib/db";
import { getSeft } from "@/lib/auth-service";

export const getRecommended = async () =>{
    //get all
    const users = db.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return users;
}