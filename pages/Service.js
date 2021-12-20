import { Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import styles from '../styles/Service .module.css';
import PeopleIcon from '@mui/icons-material/People';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Service = () => {
    return (
        <Container sx={{ marginTop: 15 }}>
            <Typography variant="h4" component="h4" textAlign='center' style={{ fontWeight: 800 }} >Why Choose Besnik?</Typography>
            <Typography variant="body1" textAlign='center' style={{ paddingTop: 5, color: 'grey' }}>We offer a wide range of opportunity for you. See what you will get and your benefits</Typography>

            <Box sx={{
                flexGrow: 1, display: 'flex',
                justifyContent: 'center', marginTop: 10
            }}>
                <Grid container spacing={6} >
                    <Grid item xs={12} md={4} lg={4} >
                        <Paper sx={{ border: 0, boxShadow: 0 }}>
                            <div className={styles.icon_bg1}>
                                <div className={styles.icn}>
                                    <CardMembershipIcon sx={{ fontSize: 70, color: '#ffff' }} />
                                </div>
                            </div>
                            <Typography variant="h5" component="h5" style={{ fontWeight: 700 }} >
                                Get Certificate
                            </Typography>
                            <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>We are providing a certificate to you after completing your course and this will help <br /> you future.We are providing a certificate<br /> to you after completing your course and <br />this will help you future.
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} >
                        <Paper sx={{ border: 0, boxShadow: 0 }}>
                            <div className={styles.icon_bg2}>
                                <div className={styles.icn}>
                                    <PeopleIcon sx={{ fontSize: 70, color: '#ffff' }} />
                                </div>
                            </div>
                            <Typography variant="h5" component="h5" style={{ fontWeight: 700 }} >
                                Get Certificate
                            </Typography>
                            <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>We are providing a certificate to you after completing your course and this will help <br /> you future.We are providing a certificate<br /> to you after completing your course and <br />this will help you future.
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} >
                        <Paper sx={{ border: 0, boxShadow: 0 }}>
                            <div className={styles.icon_bg3}>
                                <div className={styles.icn}>
                                    <BorderColorIcon sx={{ fontSize: 70, color: '#ffff' }} />
                                </div>
                            </div>
                            <Typography variant="h5" component="h5" style={{ fontWeight: 700 }} >
                                Get Certificate
                            </Typography>
                            <Typography variant="body1" style={{ paddingTop: 20, lineHeight: 1.6 }}>We are providing a certificate to you after completing your course and this will help <br /> you future.We are providing a certificate<br /> to you after completing your course and <br />this will help you future.
                            </Typography>

                        </Paper>
                    </Grid>


                </Grid>
            </Box>
        </Container>
    );
};

export default Service;