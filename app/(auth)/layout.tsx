
import { currentUser } from "@clerk/nextjs/server";
import { Logo } from "./_components/logo";
function layout({children}: {children:React.ReactNode}) {

    return (
        <div className="flex flex-col h-full items-center justify-center space-y-6">
            <Logo/>
            {children}
        </div>
    );
}

export default layout;