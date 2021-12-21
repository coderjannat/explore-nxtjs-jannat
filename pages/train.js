import { Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import styles from '../styles/train.module.css';
import Link from 'next/link';

const Train = () => {
    return (
        <Container sx={{ marginTop: 20 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}  >
                        <Paper sx={{ border: 0, boxShadow: 0 }}>
                            <Typography variant="h4" component="h4" style={{ fontWeight: 800, lineHeight: 1.6 }} >
                                Get trained by the worlds best teachers
                            </Typography>
                            <Typography variant="body1" style={{ paddingTop: 30, lineHeight: 1.6 }}>
                                Here guiding and teaching some experienced and prolific bunch of teachers.
                            </Typography>
                            <div style={{ marginTop: 50, position: 'relative', display: 'flex' }}>
                                < DoneIcon />
                                <Typography variant="body1" sx={{ pr: 5 }}>
                                    Get in touch
                                </Typography>
                                < DoneIcon />
                                <Typography variant="body1">
                                    Get in touch
                                </Typography>

                            </div>

                            <div style={{ marginTop: 50 }}>
                                <Link href="/explore">
                                    <button className={styles.train_btn}> <strong>Learn More</strong></button></Link>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>

                        <div style={{marginTop:10}}>
                            <img src="https://www.webhuq.com/templates/e_learning_website_8080/assets/images/feature1-img.png" style={{ width: '100%', display: 'block', alignItems: 'center' }} />
                        </div>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Train;