import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={6} >
                    <Grid item xs={12} md={3} lg={3} >
                        <Typography variant="h4" style={{ fontWeight: 800, color: '#212832' }}>Basnik</Typography>
                        <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>We are giving our students the <br />best and suitable services for <br />building their bright future.</Typography>
                        <Box sx={{ pt: 4 }}>
                            <FacebookIcon style={{ color: '#212832', borderRadius: 5, fontSize: 30, marginRight: 10 }} />
                            <TwitterIcon style={{ color: '#212832', borderRadius: 5, fontSize: 30, marginRight: 10 }} />
                            <LinkedInIcon style={{ color: '#212832', borderRadius: 5, fontSize: 30, marginRight: 10 }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} >
                        <Typography variant="h6" style={{ lineHeight: 1.6, fontWeight: 500, color: '#212832' }}>Company</Typography>
                        <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>About</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Careers</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Mobile</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>How it works</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Contact Us</Typography>

                    </Grid>
                    <Grid item xs={12} md={3} lg={3} >
                        <Typography variant="h6" style={{ lineHeight: 1.6, fontWeight: 500, color: '#212832' }}>Support</Typography>
                        <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>About</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Careers</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Mobile</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>How it works</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Contact Us</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} >
                        <Typography variant="h6" style={{ lineHeight: 1.6, fontWeight: 500, color: 'black' }}>Contact Us</Typography>
                        <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>About</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Careers</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Mobile</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>How it works</Typography>
                        <Typography variant="body1" style={{ paddingTop: 6, lineHeight: 1.6 }}>Contact Us</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="body2" textAlign='center' style={{ paddingTop: 70 }}>Copyright © 2021 All Right Reserved Jannatul Fardous</Typography>
        </footer>
    );
};

export default Footer;