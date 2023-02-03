import WidgetWrapper from "../components/WidgetWrapper"
import FlexBetween from "../components/Flexbetween"
import {Box,useMediaQuery,useTheme, Grow, Typography,IconButton} from "@mui/material"
import { InView } from 'react-intersection-observer';
import { Facebook,WhatsApp,Twitter, Instagram } from "@mui/icons-material";
import { height } from "@mui/system";

const Footer = ()=>{
    const theme =useTheme();
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
            <IconButton sx={{
                m:"0 1rem",
                "& svg":{
                    fontSize:"2rem"
                }
            }} >
                <Facebook/>
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
            <IconButton sx={{
                m:"0 1rem",
                "& svg":{
                    
                    fontSize:"2rem"
                }
            }} >
                <Instagram/>
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