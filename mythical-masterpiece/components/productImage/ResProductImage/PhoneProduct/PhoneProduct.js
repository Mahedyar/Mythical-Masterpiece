import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SwiperPhone from "./SwiperPhone";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function PhoneProduct() {
  const matches = useMediaQuery("(min-width:769px)");

  return (
    <>
      <Container maxWidth={matches ? "lg" : "sm"}>
        <Box sx={{ bgcolor: "#f5f5f5", borderRadius: 3 }}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              margin: "auto",
              borderRadius: 3,
                maxHeight:420,

            }}
          >
            <SwiperPhone />
          </Box>
        </Box>
      </Container>
    </>
  );
}
