import { Box } from "@mui/material";

const Image = ({ imageURL, width = "60px" , height = "60px" }) => {
  return (
    <Box width={width} height={height}>
      <img
        style={{ objectFit: "cover", borderRadius: "20px" }}
        width={width}
        height={height}
        alt="user"
        src={imageURL}
      />
    </Box>
  );
};

export default Image;