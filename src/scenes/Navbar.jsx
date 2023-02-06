import { Typography,Box,useMediaQuery,IconButton, useTheme } from "@mui/material"
import {ShoppingCartOutlined,Menu,Close}from "@mui/icons-material"
import Logo from "../images/logo.webp"
import FlexBetween from "../components/Flexbetween"
import FlexBetweenLeft from "../components/FlexbetweenLeft"
import "../style.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navbar =()=>{
    const theme =useTheme();
    const navigate = useNavigate();
    const grey = theme.colorToken.grey;
    const green = theme.colorToken.green;
    const white  = theme.colorToken.white;
    const greenLessOpacity = theme.colorToken.greenLessOpacity
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const [isMobileMenuToggled,setIsMobileMenuToggled ] = useState(false);
    

    return(
    <FlexBetween  
    justifyContent="space-between"
    sx={{
        position:"fixed",
        alignItems:"center",
        width:"100vw",
        backgroundColor:white,
        minHeight:"7rem",
        maxHeight:"7rem",
        padding:"15px 10%",
        "z-index":"10"
    }}
    >
        <FlexBetween alignItems="center" onClick={()=>navigate("/earthly-product-landing_page/")} >
            <img  src={Logo} height={"100%"} width={"40%"}  />
            <h1  className="nav-main" >earthly</h1>
            
        </FlexBetween>
        {isNonMobileScreens?(
        <FlexBetween>

            
            <h1 className="nav-route" onClick={()=>navigate("/earthly-product-landing_page/")} >
                Home
            </h1>
            <h1 className="nav-route" onClick={()=>navigate("/earthly-product-landing_page/store")}>
                Store
            </h1>
            <Box 
            width={"3.1rem"}
            height={"3.1rem"}
            backgroundColor={grey}
            borderRadius={"100%"}
            p={"3px 0 0 3px"}
            m={"0 2rem 0 0" }
            sx={{
                "transition":"1s",
                "&:hover":{
                    backgroundColor:green,

                },
                "&:hover svg":{
                    color:white,
                }
            }} >
                <IconButton >
                    <ShoppingCartOutlined sx={{ 
                        color:green,
                        
                        fontSize:"1.7rem"
                        }}
                    />
                </IconButton>
            </Box>
        </FlexBetween>):(
            <IconButton onClick={()=>setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
                {!isNonMobileScreens && !isMobileMenuToggled && (
                    <Menu sx={{
                        "color":green,
                        fontSize:"2rem",
                    }} />
                )}
                
            </IconButton>
        )}
        {!isNonMobileScreens && isMobileMenuToggled && (
            <Box
            position="fixed"
            right="0"
            top="00"
            pb={"5rem"}
            zIndex="10"
            minWidth="75vw"
            maxWidth="500px"
            borderRadius={"20px"}
            
            sx={{
                backgroundColor:greenLessOpacity,
                "backdrop-filter":" blur(10px)",
                
            }}
        >
            
                        <IconButton sx={{
                            "color":green,
                            m:"1rem 0 0 85%"
                            
                        }}
                         onClick={()=>setIsMobileMenuToggled(!isMobileMenuToggled)}>
                            <Close sx={{
                                fontSize:"2rem",
                            }} />
                        </IconButton>
                        <FlexBetween flexDirection={"column"} alignItems="center" >
                        
                            <h1 className="nav-route-mob" >
                                Home
                            </h1>
                            <div className="br" ></div>
                            <h1 className="nav-route-mob" >
                                Store
                            </h1>
                            <div className="br" ></div>
                            <h1 className="nav-route-mob" >
                                Cart
                            </h1>
                            <div className="br" ></div>
                        </FlexBetween>
                    
        </Box>
        )}
        
    </FlexBetween>    
    )
}

export default Navbar