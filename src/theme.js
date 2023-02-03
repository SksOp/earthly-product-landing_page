const Roboto = "Roboto";
const RobotoCondensed = "Roboto Condensed";

const colorTokens = {
    white : "#fff",
    grey :"rgb(222,222,222)",
    darkgrey:"#585858",
    green:"rgba(10,81,55,1)",
    greenLessOpacity:"rgba(10,81,55, 0.09)",
    whiteLessOpacity:"rgba(255,255,255, 0.62)"
}

const themeSettings = () =>{
    const selectedFontFamily = Roboto;

    return{
        colorToken:{
            white : colorTokens.white,
            grey : colorTokens.grey,
            green : colorTokens.green,
            darkgrey:colorTokens.darkgrey,
            greenLessOpacity : colorTokens.greenLessOpacity,
            whiteLessOpacity : colorTokens.whiteLessOpacity,
        },
        typography: {
            fontFamily: [selectedFontFamily, "sans-serif"].join(","),
            fontSize: 12,
            margin:0,
            h1: {
              fontFamily: [RobotoCondensed, "sans-serif"].join(","),
              fontSize: 12,
              margin:0,
            },
            h2: {
              fontFamily: [selectedFontFamily, "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: [selectedFontFamily, "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: [selectedFontFamily, "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: [selectedFontFamily, "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: [selectedFontFamily, "sans-serif"].join(","),
              fontSize: 14,
            },
        }
    }
}

export default themeSettings;