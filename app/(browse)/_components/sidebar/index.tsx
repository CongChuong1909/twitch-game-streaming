import { getRecommended } from "@/lib/recommended-service";
import Recommended from "./recommended";
import ToggleButton from "./toggleButton";
import Wrapper from "./wrapper";

async function SideBar() {
    const recommended = await getRecommended();

    return (
        <Wrapper>
            <ToggleButton/>
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data = {recommended}/>  
            </div>
        </Wrapper>
    );
}

export default SideBar;