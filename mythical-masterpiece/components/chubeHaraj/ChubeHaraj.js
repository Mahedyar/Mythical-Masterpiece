import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemCard from "./ItemCard";
import ItemImage from "./ItemImage";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Timer from "./Timer";
import ItemsSlider from "./ItemsSlider";
import background from "../../assets/Images/ChubeHaraj/sale_bg.png";
import chubeharaj from "../../assets/Images/ChubeHaraj/sale.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const ChubeHaraj = (props) => {
 

  // let tabletSize = false;
  
  const mobileSize = useMediaQuery("(max-width:425px)");
  const fullSize = useMediaQuery("(min-width:1024px)");
  const [slidesNumber, setSlidesNumber] = useState(0);
  const [tabletSize , setTabletSize] = useState(false)
  const [chubWidth , setChubWidth] = useState()
 

    
React.useEffect(()=>{
  if (fullSize) {
    setSlidesNumber(4.7);
    setChubWidth(1082)

  }
  
  if (mobileSize) {
    setSlidesNumber(1);
    setChubWidth(290)
  }

  if (!mobileSize && !fullSize) {
    setTabletSize(true) ;
    setChubWidth(690)
    setSlidesNumber(2);
  }

}
,[mobileSize , fullSize])
  // const responsiveNumberHandler = () => {
    


  //   // if (fullSize) {
  //   //   setSlidesNumber(4.7);
  //   // }
  //   // if (tabletSize) {
  //   //   setSlidesNumber(2);
  //   // }
  //   // if (mobileSize) {
  //   //   setSlidesNumber(1);
  //   // }

  //   // return slidesPerView;
  // };

  // console.log(
  //   ` fullSize : ${fullSize} , tabletSize : ${tabletSize}, mobileSize : ${mobileSize}`
  // );

  // const windowSize = "500px";

  return (
   
    <div className="chubeHaraj">
      
      
      <Box
        sx={{
          // width: 1500,
          display: "flex",
          height: fullSize ? 516 : 842 ,
          padding : "40px 0" ,
          marginBottom : "34px" ,
          backgroundColor: "#0a3680",
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "repeat-x",
          zIndex: "1",
        }}
      >
        <Container id="Container">
          <Box
            sx={{
              display: fullSize ? "flex" : "block",
              // height: 516,
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            {!fullSize && <Box
              sx={{
                width: `${fullSize ? "240px" : "190px"}`,
                margin: "0 auto",
              }}
            >
              <Typography
                sx={{
                  color: "yellow",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "32px",

                  zIndex: 1,
                }}
              >
                چوب حراج
                <Box
                  sx={{
                    height: "25px",
                    backgroundColor: "#0082fd",
                    marginTop: "-20px",
                  }}
                ></Box>
                <Timer />
              </Typography>

              <img
                style={{
                  // width: `${fullSize || tabletSize ? "240px" : "120px"}`,
                  marginLeft : "0 auto"
                }}
                src={chubeharaj.src}
              />
            </Box> }
            <Paper
              sx={{
                width: "calc(100% - 222px)",
                minWidth: "138px",
                zIndex: " 1",
                display: "block",
                alignItems: "center",
                justifyContent: "right",
                zIndex: "1",
                backgroundColor:  "white",
              }}
            >
              <Box sx={{padding : "24px 0" , height : fullSize ? "436px" : "451px"  , width : chubWidth}}>
                <ItemsSlider
                  products={props.products}
                  // stateRun = {responsiveNumberHandler()}
                  slidesPerView={slidesNumber}
                  cardsPaddingTop={props.cardsPaddingTop}
                  fullSize = {fullSize}
                  tabletSize = {tabletSize}
                  mobileSize = {mobileSize}
                />
              </Box>
            </Paper>
            {fullSize && <Box
              sx={{
                width: `${fullSize ? "240px" : "190px"}`,
                margin: "0 auto",
              }}
            >
              <Typography
                sx={{
                  color: "yellow",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "32px",

                  zIndex: 1,
                }}
              >
                چوب حراج
                <Box
                  sx={{
                    height: "25px",
                    backgroundColor: "#0082fd",
                    marginTop: "-20px",
                  }}
                ></Box>
                <Timer />
              </Typography>

              <img
                style={{
                  // width: `${fullSize || tabletSize ? "240px" : "120px"}`,
                  marginLeft : "0 auto"
                }}
                src={chubeharaj.src}
              />
            </Box> }
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default ChubeHaraj
