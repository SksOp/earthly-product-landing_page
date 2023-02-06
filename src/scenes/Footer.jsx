import WidgetWrapper from "../components/WidgetWrapper"
import FlexBetween from "../components/Flexbetween"
import {Box,useMediaQuery,useTheme, Grow, Typography,IconButton} from "@mui/material"
import { InView } from 'react-intersection-observer';
import { Facebook,WhatsApp,Twitter, Instagram } from "@mui/icons-material";
import { height } from "@mui/system";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
const Footer = ()=>{
    const theme =useTheme();
    const navigate = useNavigate();
    const grey = theme.colorToken.grey;
    const green = theme.colorToken.green;
    const white  = theme.colorToken.white;
    const greenLessOpacity = theme.colorToken.greenLessOpacity
    const darkgrey = theme.colorToken.darkgrey
    const whiteLessOpacity = theme.colorToken.whiteLessOpacity
    return(
        <WidgetWrapper sx={{mb:"20px"}} backgroundColor={whiteLessOpacity} >
        <InView>{({ inView, ref, entry })=>(
            <div ref={ref}>
        <FlexBetween  minHeight={"20px"} justifyContent={"center"} p={"0 5rem"} >
            <Grow in={inView}>
            <IconButton  sx={{
                m:"0 1rem",
                "& svg":{
                    fontSize:"2rem"
                }
            }} >
                <Link to={{ pathname: "https://www.facebook.com/wix" }} target="_blank"><Facebook/></Link>
            </IconButton>
            </Grow>
            <Grow in={inView}>
            <IconButton sx={{
                m:"0 1rem",
                "& svg":{
                    
                    fontSize:"2rem"
                }
            }} >
                
                <WhatsApp/>
                
            </IconButton>
            </Grow>
            <Grow in={inView}>
            <IconButton  sx={{
                m:"0 1rem",
                "& svg":{
                    
                    fontSize:"2rem"
                }
            }} >
                <Link to={{ pathname: "https://www.instagram.com/wix/" }}  target="_blank"><Instagram/></Link>
            </IconButton>
            </Grow>
            
        </FlexBetween>
        </div>
        )}
        </InView>
        </WidgetWrapper>
    )
}
export default Footer;