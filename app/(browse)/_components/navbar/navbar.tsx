import { Logo } from "./logo";
import Search from "./search";
import Action from "./action";

function Navbar() {
    return (
        <nav className="fixed top-0 w-full h-20 z-40 bg-[#252731] px-2 lg-px-4 flex justify-between items-center shadow-sm">
            <Logo/>
            <Search/>
            <Action/>
        </nav>
    );
}

export default Navbar;