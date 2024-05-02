import "./navbar.scss"
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar ()  {
    return (
        <div className={"Navbar"}>
           <Sidebar/>
            <div className={"Wrapper"}>
                <span>israel akinwande</span>
                <div className={"Socials"}>
                    <a href={"#"}><img className={"linkedin"} src={"/linkdin.png"} /> </a>
                    <a href={"#"}><img className={"linkedin"} src={"/instagram.png"} /> </a>
                </div>
            </div>
        </div>
    )


}