//eslint-disable-next-line
import FlexBetween from "../components/Flexbetween";
import Navbar from "./Navbar";
import ImageWidget from "../Widgets/ImagesWidget"
import "../style.css"
import grass from "../images/grass.webp"
import vector from "../images/vector.png"
import leaf from "../images/leaf.png"
import { Box } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import DetailsWidget from "../Widgets/DetailsWidget";
import DescriptionWidget from "../Widgets/DescriptionWidget"
import Footer from "./Footer"
const LandingPage = ()=>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    return(
        <>
        <Navbar/>
        <FlexBetween flexDirection={"column"} >
            <FlexBetween  justifyContent={"space-around"} mt={"6rem"} flexDirection={isNonMobileScreens?"row":"column"}>
                    <ImageWidget/> 
                    <DetailsWidget /> 
            </FlexBetween>
            <Box m={"3rem 2%"} >
            <DescriptionWidget />
            </Box>
            
            <Box m={"1rem 2%"} >
             <Footer/>
            </Box>
        </FlexBetween>

        <img src={grass} className="grass"/>
        <img src={vector} className="vector"/>
        <img src={leaf} className="leaf"/>

        
        
        </>
    )
}

export default LandingPage;