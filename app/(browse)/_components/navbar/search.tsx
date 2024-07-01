"use client"
import queryString from "query-string";
import { Search as SeachIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
function Search() {
    const route = useRouter();
    const [value, setValue] = useState("")
    const onsubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!value)
            return
        const url = queryString.stringifyUrl({
            url:'/',
            query:{ term: value}
        }, {skipEmptyString: true})
        route.push(url);
    }

    return (
        <form className="relative w-full lg:w-[400px] flex items-center"
            onSubmit={onsubmit}
        >
            <Input 
                value={value}
                onChange={(e)=>setValue(e.target.value)} 
                placeholder="Search" 
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/> 
            {value && <X onClick={()=>setValue("")} className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"/>}
            <Button type="submit" size="sm" variant="secondary">
                <SeachIcon className="h-5 w-5 text-muted-foreground"/>    
            </Button>   
        </form>
    );
}

export default Search;