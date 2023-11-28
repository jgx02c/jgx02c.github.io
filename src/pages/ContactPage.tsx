import { About } from "../components/about/about";
import { Line } from "../components/line/line";
import { NavFooter } from "../components/nav-footer/nav-footer";
import { Timeline } from "../components/timeline/timeline";

function ContactPage () {
    return(
        <div>
            <About /> 
            <Line />
            
            <NavFooter />
        </div>
    )
}

export default ContactPage;