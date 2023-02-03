import WidgetWrapper from "../components/WidgetWrapper"
import FlexBetween from "../components/Flexbetween"
import FlexBetweenLeft from "../components/FlexbetweenLeft"
import {Box,useMediaQuery,useTheme,Grow, Typography} from "@mui/material"
import { useState } from "react"
import { InView } from 'react-intersection-observer';

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
        <WidgetWrapper  backgroundColor={greenLessOpacity} >
            <FlexBetween flexDirection={"column"} p="2%" >
                <FlexBetweenLeft m={"0 0 3%"} flexDirection={"column"} >
                    <Typography fontWeight={"900"} fontSize={!isNonMobileScreens?"150%":"2.2rem"}  lineHeight="102%" >
                    Sustainability Starter Kit
                    </Typography>
                    <FlexBetween  alignItems={"center"} >
                        <Typography 
                        color={green} 
                        fontSize={!isNonMobileScreens?"170%":"2.5rem"}  
                        m={"0 10px 0 0"}
                        >
                            €10.99
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

                </FlexBetweenLeft>
                <FlexBetweenLeft  m={"0 0 3%"} flexDirection={"column"} >
                    <Typography
                        fontWeight={"400"} 
                        color={"black"} 
                        // fontSize={"1.5rem"} 
                        borderRadius="10px" 
                        >
                            <h3 style={{padding:"0",margin:"0"}} >Consists of:</h3>
                            <h4 style={{padding:"0 0 0 6px",margin:"0",color:darkgrey}}>
                            <ul>
                                <li>2 Bamboo Straws <br/></li>
                                <li>1 Plant Based Reusable Cup with 2 lids <br/></li>
                                <li>1 Natural Loofah <br/></li>
                                <li>1 box of 50 Bamboo Cotton Eartips <br/></li>
                                <li>1 Bamboo Toothbrush <br/></li>
                            </ul>
                            </h4>
                            
                    </Typography>
                </FlexBetweenLeft>
                <FlexBetweenLeft  m={"0 0 3%"} flexDirection={"column"} >
                    <Typography
                        fontWeight={"400"} 
                        color={"black"} 
                        // fontSize={"1.5rem"} 
                        borderRadius="10px" 
                        >
                           
                            <h3 style={{padding:"0",margin:"0"}} >Features:</h3>
                            <h4 style={{padding:"0 0 0 6px",margin:"0",color:darkgrey}}>
                        <ul>
                            <li>Govt Approved, Tested, and approved in TUV Rhineland, Germany<br/></li>
                            <li>100% recyclable and non-toxic<br/></li>
                            <li>Leak-Proof<br/></li>
                            <li>Odorless tasteless and doesn't react with hot beverages<br/></li>
                            <li>Lightweight<br/></li>
                            <li>Microwavable<br/></li>
                        </ul>
                            </h4>
                    </Typography>
                </FlexBetweenLeft>
                <FlexBetween 
                flexWrap={"wrap"} 
                justifyContent={"space-evenly"}
                alignContent="stretch"
                >
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
                    <Typography 
                    borderRadius={"10px"}
                    border={`1px solid ${white}`}
                    color={"black"}
                    p={"15px"}
                    m={"10px"}
                    backgroundColor={white}
                    fontWeight={"500"} 
                    fontSize={!isNonMobileScreens?"150%":"1rem"} 
                    sx={{
                        "&:hover":{
                            color:"black",
                            cursor:"pointer" ,
                            backgroundColor:white,
                            border:`1px solid ${green}`,
                                 
                        }
                    }} 
                     >
                        Add to cart
                    </Typography>
                </FlexBetween>
            </FlexBetween>            
        </WidgetWrapper>
    )
}

export default DetailsWidget;