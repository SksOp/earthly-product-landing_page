import WidgetWrapper from "../components/WidgetWrapper"
import FlexBetween from "../components/Flexbetween"
import FlexBetweenLeft from "../components/FlexbetweenLeft"
import {Box,useMediaQuery,useTheme,Grow, Typography} from "@mui/material"
import { useState } from "react"
import { InView } from 'react-intersection-observer';
import image1 from "../images/image1.webp"
import image2 from "../images/image2.webp"
import image3 from "../images/image3.webp"
import image4 from "../images/image4.webp"
import image5 from "../images/image5.webp"
import image6 from "../images/image6.webp"


const DetailsWidget =()=>{
    const theme =useTheme();
    const grey = theme.colorToken.grey;
    const green = theme.colorToken.green;
    const white  = theme.colorToken.white;
    const greenLessOpacity = theme.colorToken.greenLessOpacity
    const darkgrey = theme.colorToken.darkgrey
    const whiteLessOpacity = theme.colorToken.whiteLessOpacity
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    return(
        <WidgetWrapper backgroundColor={whiteLessOpacity} >
            <FlexBetween flexDirection={"column"} >
            <Typography m={ "0 0 1rem 0.5rem"} fontWeight={"900"} fontSize={!isNonMobileScreens?"150%":"2.2rem"}  lineHeight="102%" >
                    Products: 
            </Typography>
            <FlexBetween flexWrap={"wrap"} justifyContent={"space-around"} >
                
                {/* <div style={{background:`url(${image2})`,"background-size":"cover"}} >
            
                </div> */}
                <InView>
                {({ inView, ref, entry }) => (
                <div ref={ref}>
                <Grow in={inView}>
                <Box 
                width={200}
                height={200}
                borderRadius={"20px"}
                mb={"30px"}
                sx={{
                    background:`url(${image2})`,
                    "background-size":"cover",
                    "background-position": "center",   
                }}
                >
                    <Box
                    width={200}
                    height={200}
                    borderRadius={"20px"}
                    textAlign={"center"}
                    sx={{
                        backgroundColor:whiteLessOpacity,
                        opacity:(!isNonMobileScreens && inView )?"1":"0",
                        "&:hover":{
                            opacity:1,
                        },
                         
                        
                    }}
                    >
                        
                        <Typography
                        sx={{
                            p:"50% 10% 0 10%",
                            fontSize:"1.5rem"
                        }}
                        >
                            <h3 style={{"margin":"0"}}>Reusable Cup</h3>
                        </Typography>
                        

                    </Box>
                    
                </Box>
                </Grow>
                </div>
                )}
                </InView>
                <InView>
                {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <Grow in={inView}>
                <Box 
                width={200}
                height={200}
                borderRadius={"20px"}
                mb={"30px"}
                sx={{
                    background:`url(${image3})`,
                    "background-size":"cover",
                    "background-position": "center",   
                }}
                >
                    <Box
                    width={200}
                    height={200}
                    borderRadius={"20px"}
                    textAlign={"center"}
                    sx={{
                        backgroundColor:whiteLessOpacity,
                        opacity:(!isNonMobileScreens && inView )?"1":"0",
                        "&:hover":{
                            opacity:1,
                        },
                         
                        
                    }}
                    >
                        
                        <Typography
                        sx={{
                            p:"50% 10% 0 10%",
                            fontSize:"1.5rem"
                        }}
                        >
                            <h3 style={{"margin":"0"}}>Bomboo Straw</h3>
                        </Typography>
                        

                    </Box>
                    
                </Box>
                </Grow>
                </div>
                )}
                </InView>
                <InView>
                {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <Grow in={inView}>
                <Box 
                width={200}
                height={200}
                borderRadius={"20px"}
                mb={"30px"}
                sx={{
                    background:`url(${image6})`,
                    "background-size":"cover",
                    "background-position": "center",   
                }}
                >
                    <Box
                    
                    width={200}
                    height={200}
                    borderRadius={"20px"}
                    textAlign={"center"}
                    sx={{
                        backgroundColor:whiteLessOpacity,
                        opacity:(!isNonMobileScreens && inView )?"1":"0",
                        "&:hover":{
                            opacity:1,
                        },
                         
                        
                    }}
                    >
                        
                        <Typography
                        sx={{
                            p:"50% 10% 0 10%",
                            fontSize:"1.5rem"
                        }}
                        >
                            <h3 style={{"margin":"0"}}>Bamboo Toothbrush</h3>
                        </Typography>
                        

                    </Box>
                    
                </Box>
                </Grow>
                </div>
                )}
                </InView>
                <InView>
                {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <Grow in={inView}>
                <Box 
                width={200}
                height={200}
                borderRadius={"20px"}
                mb={"30px"}
                sx={{
                    background:`url(${image4})`,
                    "background-size":"cover",
                    "background-position": "center",   
                }}
                >
                    <Box
                    width={200}
                    height={200}
                    borderRadius={"20px"}
                    textAlign={"center"}
                    sx={{
                        backgroundColor:whiteLessOpacity,
                        opacity:(!isNonMobileScreens && inView )?"1":"0",
                        "&:hover":{
                            opacity:1,
                        },
                         
                        
                    }}
                    >
                        
                        <Typography
                        sx={{
                            p:"50% 10% 0 10%",
                            fontSize:"1.5rem"
                        }}
                        >
                            <h3 style={{"margin":"0"}}>Natural Loofah</h3>
                        </Typography>
                       

                    </Box>
                    
                </Box>
                </Grow>
                </div>
                )}
                </InView>
                <InView>
                {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <Grow in={inView}>
                <Box 
                width={200}
                height={200}
                borderRadius={"20px"}
                mb={"30px"}
                sx={{
                    background:`url(${image5})`,
                    "background-size":"cover",
                    "background-position": "center",   
                }}
                >
                    <Box
                    width={200}
                    height={200}
                    borderRadius={"20px"}
                    textAlign={"center"}
                    sx={{
                        backgroundColor:whiteLessOpacity,
                        opacity:(!isNonMobileScreens && inView )?"1":"0",
                        "&:hover":{
                            opacity:1,
                        },
                         
                        
                    }}
                    >
                        
                        <Typography
                        sx={{
                            p:"50% 10% 0 10%",
                            fontSize:"1.5rem"
                        }}
                        >
                            <h3 style={{"margin":"0"}}>Cotton Eartips</h3>
                        </Typography>
                       

                    </Box>
                    
                </Box>
                </Grow>
                </div>
                )}
                </InView>
                
            </FlexBetween>     
        </FlexBetween>                
        </WidgetWrapper>
    )

}

export default DetailsWidget;