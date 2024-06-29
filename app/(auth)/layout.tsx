import { Logo } from "./_components/logo";
import { currentUser } from "@clerk/nextjs/server";
function layout({children}: {children:React.ReactNode}) {
    const user =  currentUser();
    console.log(currentUser);
    
    return (
        <div className="flex flex-col h-full items-center justify-center space-y-6">
            <Logo/>
            {children}
        </div>
    );
}

export default layout;