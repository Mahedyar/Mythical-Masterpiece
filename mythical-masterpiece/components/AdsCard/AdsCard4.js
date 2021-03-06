import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Image from "next/image";
import woman_perfume from "../../public/Images/Ads/woman_perfume.png";
import smart_watch from "../../public/Images/Ads/smart_watch.png";
import electrical_owntools from "../../public/Images/Ads/electrical_owntools.png";
import man_perfume from "../../public/Images/Ads/man_perfume.png";
import woman_watch from "../../public/Images/Ads/woman_watch.png";

export default function AdsCard4() {
    return (
        <Container>
            <Box sx={{flexGrow: 1}} className="adsbox">
                <Grid container spacing={1}>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="#">
                                            <img
                                                src={woman_perfume.src}
                                                className="img41"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="#">
                                            <img
                                                src={smart_watch.src}
                                                className="img42"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="#">
                                            <img
                                                src={man_perfume.src}
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="#">
                                            <img
                                                src={woman_watch.src}
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} md={4} lg={4}>
                        <Paper elevation={0}>
                            <a href="#">
                                <img
                                    src={electrical_owntools.src}
                                    className="img44"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}
