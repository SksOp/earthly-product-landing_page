//eslint-disable-next-line
import FlexBetween from "../components/Flexbetween";
import Navbar from "./Navbar";
import ImageWidget from "../Widgets/ImagesWidget"
import "../style.css"
import grass from "../images/grass.webp"
import vector from "../images/vector.png"
import leaf from "../images/leaf.png"
import { Box,Slide, Grow, Typography,useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import DetailsWidget from "../Widgets/DetailsWidget";
import DescriptionWidget from "../Widgets/DescriptionWidget"
import Footer from "./Footer"
import image from "../images/earth.gif"
import WidgetWrapper from "../components/WidgetWrapper";
import { InView } from "react-intersection-observer";

const HomePage = ()=>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const theme =useTheme();

    const grey = theme.colorToken.grey;
    const green = theme.colorToken.green;
    const white  = theme.colorToken.white;
    const greenLessOpacity = theme.colorToken.greenLessOpacity
    const whiteLessOpacity = theme.colorToken.whiteLessOpacity
//     <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//     {icon}
//   </Slide>
    return(
        <>
        <Navbar/>
        <FlexBetween  flexDirection={"column"} >
            <WidgetWrapper  backgroundColor={whiteLessOpacity} sx={{
                m:"0.5rem 3%"
            }}>
            <FlexBetween alignItems={"center"} justifyContent={"space-around"} mt={"7rem"} flexDirection={isNonMobileScreens?"row":"column-reverse"}>
            <InView>
                    {({ inView, ref, entry }) => (
                    <div ref={ref}>
                    <Box>
                    <Slide direction="right" in={inView} >
                    <Typography
                    fontStyle="bold"
                    fontWeight={isNonMobileScreens?"300":"300"}
                    fontSize={isNonMobileScreens?"9rem":"5rem"}
                    color={green}
                    maxWidth="1000px"
                    sx={{
                        "line-height": "100%",
                        
                    }}>
                        Earthly
                    </Typography>
                    </Slide>
                    <Typography 
                    fontStyle="bold"
                    fontWeight={isNonMobileScreens?"400":"400"}
                    fontSize={isNonMobileScreens?"2rem":"1rem"}
                    color={"black"}
                    >
                       Sustainable products  
                        
                    </Typography>
                    <Typography 
                    fontStyle="bold"
                    fontWeight={isNonMobileScreens?"200":"200"}
                    fontSize={isNonMobileScreens?"1.5rem":"1rem"}
                    color={green}
                    >
                        At affordable prices !!
                        
                    </Typography>
                    </Box>
                    </div>
                    )}
                    </InView>
                    <InView>
                    {({ inView, ref, entry }) => (
                    <div ref={ref}>
                    <Grow in={inView}  mountOnEnter unmountOnExit >
                    <Box 
                    width={500}
                    height={500}
                    borderRadius={"20px"}
                    mb={"30px"}
                    sx={{
                        background:`url(${image})`,
                        "background-size":"cover",
                        "background-position": "center",   
                    }}
                    ></Box>
                    </Grow>
                    </div>
                    )}
                    </InView>
                    
                    
            </FlexBetween>
            </WidgetWrapper>
            <Box m={"3rem 2%"} >
            <WidgetWrapper backgroundColor={greenLessOpacity} >
            <InView>
            {({ inView, ref, entry }) => (
            <div ref={ref}>        
                <FlexBetween 
                alignItems={"center"} 
                justifyContent={"space-around"} 
                flexDirection={isNonMobileScreens?"row":"column"}>
                    <Slide direction="right" in={inView}>
                    <FlexBetween  alignItems={"center"} >
                        
                        <Typography mr={"1rem"} fontWeight={"900"} fontSize={!isNonMobileScreens?"150%":"2.2rem"}  lineHeight="102%" >
                        Sustainability Starter Kit
                        </Typography>
                        <Typography
                        fontWeight={"400"} 
                        color={white} 
                        fontSize={"0.8rem"} 
                        backgroundColor={green} 
                        borderRadius="10px" 
                        p="0 10px" >
                            Bestseller
                        </Typography>
                    </FlexBetween>
                    </Slide>
                    <Slide direction="left" in={inView}>
                        <Typography 
                        borderRadius={"10px"}
                        p={"15px"}
                        m={"10px"}
                        backgroundColor={green}
                        color={white}
                        fontWeight={"500"} 
                        fontSize={!isNonMobileScreens?"150%":"1rem"}  
                        border={`1px solid ${green}`}
                        sx={{
                            "&:hover":{
                                color:green,
                                cursor:"pointer" ,
                                backgroundColor:white,
                                border:`1px solid ${green}`,
                                    
                            }
                        }}
                        >
                            Buy Now
                        </Typography>
                        </Slide>
                </FlexBetween>
            </div>
                )}
                </InView>
            </WidgetWrapper>
            
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

export default HomePage;