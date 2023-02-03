import Image from "../components/Image"
import WidgetWrapper from "../components/WidgetWrapper"
import FlexBetween from "../components/Flexbetween"
import {Box,useMediaQuery,useTheme,Grow} from "@mui/material"
import { useState } from "react"
import { InView } from 'react-intersection-observer';
import image1 from "../images/image1.webp"
import image2 from "../images/image2.webp"
import image3 from "../images/image3.webp"
import image4 from "../images/image4.webp"
import image5 from "../images/image5.webp"
import image6 from "../images/image6.webp"

const ImageWidget = () =>{
    const [selectedpic,setSelectedpic]=useState(1);
    
    const theme =useTheme();
    const grey = theme.colorToken.grey;
    const green = theme.colorToken.green;
    const white  = theme.colorToken.white;
    const greenLessOpacity = theme.colorToken.greenLessOpacity
    const whiteLessOpacity = theme.colorToken.whiteLessOpacity
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    
    
    console.log(selectedpic);

    return(
        <WidgetWrapper  backgroundColor={whiteLessOpacity} >
        <InView>
        {({ inView, ref, entry }) => (
      <div ref={ref}>
        {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
            <FlexBetween  
            flexDirection={isNonMobileScreens?"row":"column-reverse"} 
            
            >
                <FlexBetween 
                flexDirection={isNonMobileScreens?"column":"row"}  
                justifyContent={"space-around"}
                sx={{
                    "& img":{
                    width:isNonMobileScreens?"5rem":"2.5rem",
                    height:isNonMobileScreens?"5rem":"2.5rem",
                    padding:"5px" 
                    
                    }
                }}
                
                >
                    
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",border:selectedpic===1?`5px solid ${white}`:undefined}}
                        alt="alternatetext"
                        src={image1}
                        onMouseEnter={()=>setSelectedpic(1)}
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",border:selectedpic===2?`5px solid ${white}`:undefined }}
                        alt="alternatetext"
                        src={image2}
                        onMouseEnter={()=>setSelectedpic(2)}
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        onMouseEnter={()=>setSelectedpic(3)}
                        style={{ objectFit: "cover", borderRadius: "20px",border:selectedpic===3?`5px solid ${white}`:undefined }}
                        alt="alternatetext"
                        src={image3}
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        onMouseEnter={()=>setSelectedpic(4)}
                        style={{ objectFit: "cover", borderRadius: "20px",border:selectedpic===4?`5px solid ${white}`:undefined }}
                        alt="alternatetext"
                        src={image4}
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        onMouseEnter={()=>setSelectedpic(5)}
                        style={{ objectFit: "cover", borderRadius: "20px",border:selectedpic===5?`5px solid ${white}`:undefined }}
                        alt="alternatetext"
                        src={image5}
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        onMouseEnter={()=>setSelectedpic(6)}
                        style={{ objectFit: "cover", borderRadius: "20px",border:selectedpic===6?`5px solid ${white}`:undefined }}
                        alt="alternatetext"
                        src={image6}
                    />
                    </Grow>
                </FlexBetween>
                <FlexBetween m="20px" flexDirection={isNonMobileScreens?"column":"row"} justifyContent="space-around" alignItems={"center"} p={isNonMobileScreens?"10% 0":"0 10%"}>
                    <div  onMouseEnter={()=>setSelectedpic(1)}  onClick={()=>setSelectedpic(1)} style={{backgroundColor:green,height:selectedpic==1?"1rem":"0.7rem",width:selectedpic==1?"1rem":"0.7rem",borderRadius:"100%"}}></div>
                    <div  onMouseEnter={()=>setSelectedpic(2)} onClick={()=>setSelectedpic(2)} style={{backgroundColor:green,height:selectedpic==2?"1rem":"0.7rem",width:selectedpic==2?"1rem":"0.7rem",borderRadius:"100%"}}></div>
                    <div onMouseEnter={()=>setSelectedpic(3)} onClick={()=>setSelectedpic(3)} style={{backgroundColor:green,height:selectedpic==3?"1rem":"0.7rem",width:selectedpic==3?"1rem":"0.7rem",borderRadius:"100%"}}></div>
                    <div onMouseEnter={()=>setSelectedpic(4)} onClick={()=>setSelectedpic(4)} style={{backgroundColor:green,height:selectedpic==4?"1rem":"0.7rem",width:selectedpic==4?"1rem":"0.7rem",borderRadius:"100%"}}></div>
                    <div onMouseEnter={()=>setSelectedpic(5)} onClick={()=>setSelectedpic(5)} style={{backgroundColor:green,height:selectedpic==5?"1rem":"0.7rem",width:selectedpic==5?"1rem":"0.7rem",borderRadius:"100%"}}></div>
                    <div onMouseEnter={()=>setSelectedpic(6)} onClick={()=>setSelectedpic(6)} style={{backgroundColor:green,height:selectedpic==6?"1rem":"0.7rem",width:selectedpic==6?"1rem":"0.7rem",borderRadius:"100%"}}></div>
                </FlexBetween>
                <FlexBetween  justifyContent={"space-around"}
                sx={{
                    mb:isNonMobileScreens?undefined:"10px",
                    "& img":{
                       width:"90%",
                       
                       height:"auto", 
                    }
                }}
                >
                    
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",display:selectedpic==1?"block":"none"}}
                        alt="alternatetext"
                        src={image1}
                       
                        
                    />
                    </Grow>
                    
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",display:selectedpic==2?"block":"none"}}
                        alt="alternatetext"
                        src={image2}
                        
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",display:selectedpic==3?"block":"none"}}
                        alt="alternatetext"
                        src={image3}
                        
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",display:selectedpic==4?"block":"none" }}
                        alt="alternatetext"
                        src={image4}
                        
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px",display:selectedpic==5?"block":"none"}}
                        alt="alternatetext"
                        src={image5}
                        
                    />
                    </Grow>
                    <Grow in={inView}>
                    <img
                        style={{ objectFit: "cover", borderRadius: "20px", display:selectedpic==6?"block":"none" }}
                        alt="alternatetext"
                        src={image6}
                        
                    />
                    </Grow> 
                    
                </FlexBetween>
        </FlexBetween>
        


      </div>
    )}
  </InView>
  </WidgetWrapper>
    )
}


export default ImageWidget