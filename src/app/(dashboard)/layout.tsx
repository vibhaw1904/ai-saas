import Sidebar from "@/components/sidebar";
import TopBar from "@/components/TopBar";

const DashboardLayout=({
    children
}:{
    children:React.ReactNode;
})=>{
    return(
        <div className="h-full relative flex ">
            <div>
                <TopBar/>
            <Sidebar/>

            </div>
           

            <main className="md:pl-72">
                {/* <Navbar/> */}
            {children}
            </main>

        </div>
    )
}
export default DashboardLayout;