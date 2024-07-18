import Navbar from "./_components/navbar/navbar"
import SideBar from "./_components/sidebar"
import Container from "./_components/container"
const Browselayout = ({ children }: {children: React.ReactNode})=>{
    return  <>
            <Navbar/>
            <div className="flex h-full pt-20">
                <SideBar/>
                <Container>
                    {children}
                </Container>
            </div>
         </>
}
export default Browselayout