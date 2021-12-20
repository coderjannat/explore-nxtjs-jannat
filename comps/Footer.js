import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {

    return (
        <footer >



            <Box sx={{
                flexGrow: 1,
            }}>
                <Grid container spacing={6} >
                    <Grid item xs={12} md={4} lg={4} >
                        <Typography variant="h4" style={{ lineHeight: 1.6, fontWeight: 800 }}>Basnik</Typography>
                        <Typography variant="body1" style={{ lineHeight: 1.6 }}>We are giving our students the best and suitable services for building their bright future.</Typography>
                        <Box>
                            <FacebookIcon />
                            <FacebookIcon />
                            <FacebookIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} >
                        <Typography variant="body1" style={{ lineHeight: 1.6 }}>We are providing a certificate to you after completing your course
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={4} lg={4} >
                        <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>We are providing a certificate to you after completing your course
                        </Typography>
                    </Grid>


                </Grid>
            </Box>

        </footer>
    );
};

export default Footer;