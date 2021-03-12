import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Footer';
import video from '../assets/video.ogv';
import Navbar from './Navbar';

import '../App.css';
import Register from './Register';
import LogIn from './LogIn';

const useStyles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(15, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  button: {
    background: 'linear-gradient(90deg,#53D449,#68C8CC)',
    color: 'black',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const Landing = (props) => {
  const { classes } = props;
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const handleRegisterClose = (value) => {
    setRegisterOpen(false);
  };

  const handleRegisterClickOpen = () => {
    setRegisterOpen(true);
  };
  const handleRegisteriClickOpen = () => {
    setLogInOpen(false);
    setRegisterOpen(true);
  };
  const [logInOpen, setLogInOpen] = React.useState(false);

  const handleLogIniClickOpen = () => {
    setRegisterOpen(false);
    setLogInOpen(true);
  };

  const handleLogInClose = (value) => {
    setLogInOpen(false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main style={{ backgroundColor: 'white' }}>
        <div className={classes.heroContent}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Container style={{ paddingLeft: 80 }}>
                <Typography
                  component='h1'
                  variant='h2'
                  // align="center"
                  color='textPrimary'
                  gutterBottom
                >
                  Get news in the form of video to your WhatsApp
                </Typography>
                <Typography
                  variant='h5'
                  // align="center"
                  color='textSecondary'
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  aliquam vitae magna eget gravida. Curabitur tristique purus
                  justo, ut tincidunt tortor ornare id. Donec sed condimentum
                  velit, lobortis posuere lacus. Nunc metus nibh, hendrerit ac
                  congue eget, tincidunt nec est. Curabitur at faucibus quam.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button
                        variant='contained'
                        size='large'
                        className={classes.button}
                        onClick={handleRegisterClickOpen}
                      >
                        Get started
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </Grid>
            <Grid item md={6}>
              <Container
                style={{ width: 700, paddingLeft: 100, paddingTop: 40 }}
              >
                <video src={video} controls='controls' />
              </Container>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Typography variant='h4' align='center' color='textPrimary'>
            Customise your news videos
          </Typography>
          <br />
          <Typography variant='body1' align='center' color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam vitae magna eget gravida. Curabitur tristique purus justo,
            ut tincidunt tortor ornare id. Donec sed condimentum velit, lobortis
            posuere lacus. Nunc metus nibh, hendrerit ac congue eget, tincidunt
            nec est. Curabitur at faucibus quam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Fusce
            venenatis, mi id tempus dignissim, dui odio vulputate nibh,
            malesuada venenatis purus ante eget nunc. Proin dapibus, Fusce est
            dolor, vulputate gravida quam at, viverra feugiat tortor. Donec
            aliquet commodo erat, eu cursus sapien elementum sit amet. Nulla ut
            sodales massa. Curabitur tempus, quam nec finibus tempor, ex sapien
            feugiat mauris, at congue purus lectus fringilla enim. Integer a
            felis felis. Cras ultricies dolor eget ante volutpat ullamcorper.
            Integer auctor porta venenatis. Praesent dolor metus, consequat et
            tincidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras ut fringilla magna. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut eros risus, lobortis
            eget diam eu, porttitor tempus tortor. Fusce est dolor, vulputate
            gravida quam at, viverra feugiat tortor. Donec aliquet commodo erat,
            eu cursus sapien elementum sit amet. Nulla ut sodales massa.
            Curabitur tempus, quam nec finibus tempor, ex sapien feugiat mauris,
            at congue purus lectus fringilla enim. Integer a felis felis. Cras
            ultricies dolor eget ante volutpat ullamcorper.
          </Typography>
        </Container>

        <LogIn
          open={logInOpen}
          onClose={handleLogInClose}
          registeropen={handleRegisteriClickOpen}
        />
        <Register
          open={registerOpen}
          onClose={handleRegisterClose}
          loginopen={handleLogIniClickOpen}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default withStyles(useStyles)(Landing);
