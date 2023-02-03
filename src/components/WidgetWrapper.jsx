import {Box,useMediaQuery} from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled (Box)({
    "backdrop-filter":" blur(10px)",
    borderRadius:"10px",
    padding:"30px",
    margin:"2rem 1.5rem 0 1.5rem "
})

export default WidgetWrapper;