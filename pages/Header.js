import { Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../styles/Header.module.css'



const Header = () => {
  return (

    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}  >
            <Paper sx={{ border: 0, boxShadow: 0 }}>
              <Typography variant="h3" component="h2" style={{ fontWeight: 700, lineHeight: 1.6 }} >
                An excellence center <br /> for education
              </Typography>
              <Typography variant="body2" style={{ paddingTop: 30, lineHeight: 1.6 }}>
                Besnik is the online learning platform that offers various <br /> courses for your development
              </Typography>
              <div style={{ marginTop: 50, position: 'relative', display: 'flex' }}>
                <input type="text" name="textfield" id="textfield" className={styles.header_input} />
                <button className={styles.header_btn}>Ger Started </button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>

            <div>
              <img src="https://www.webhuq.com/templates/e_learning_website_8080/assets/images/header-img.png" style={{ width: '100%', display: 'block', alignItems: 'center' }} />
            </div>

          </Grid>
        </Grid>
      </Box>
    </Container>

  )
}

export default Header;