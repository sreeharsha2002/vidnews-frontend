import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from './Footer';
import LoggedNavbar from './LoggedNavbar';

import '../App.css';
import data from './Dashboard/data';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  button: {
    background: '#48B646',
    '&:hover': {
      background: '#48D400',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const NewspaperInfo = ({ className, match, history }) => {
  const classes = useStyles();
  const [NewsPapers] = useState(data);

  const NewsPaperarray = NewsPapers.filter(
    (item) => item.id === match.params.id
  );
  const NewsPaper = NewsPaperarray[0];

  return (
    <React.Fragment>
      <CssBaseline />
      <LoggedNavbar />
      <main style={{ backgroundColor: 'white', height: '73.5vh' }}>
        <div className={classes.heroContent}>
          <Container>
            <Typography variant='h3' align='center'>
              {NewsPaper.title}
            </Typography>
            <Grid container spacing={3} justify='center'>
              <Grid item>
                <img src={NewsPaper.media} alt={'news'} />
              </Grid>
              <Grid item>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  aliquam vitae magna eget gravida. Curabitur tristique purus
                  justo, ut tincidunt tortor ornare id. Donec sed condimentum
                  velit, lobortis posuere lacus. Nunc metus nibh, hendrerit ac
                  congue eget, tincidunt nec est. Curabitur at faucibus quam.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Fusce venenatis, mi id tempus
                  dignissim, dui odio vulputate nibh, malesuada venenatis purus
                  ante eget nunc. Proin dapibus, Fusce est dolor, vulputate
                  gravida quam at, viverra feugiat tortor. Donec aliquet commodo
                  erat, eu cursus sapien elementum sit amet. Nulla ut sodales
                  massa. Curabitur tempus, quam nec finibus tempor, ex sapien
                  feugiat mauris, at congue purus lectus fringilla enim. Integer
                  a felis felis. Cras ultricies dolor eget ante volutpat
                  ullamcorper. Integer auctor porta venenatis. Praesent dolor
                  metus, consequat et tincidunt Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Cras ut fringilla magna.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut eros risus, lobortis eget diam
                  eu, porttitor tempus tortor. Fusce est dolor, vulputate
                  gravida quam at, viverra feugiat tortor. Donec aliquet commodo
                  erat, eu cursus sapien elementum sit amet. Nulla ut sodales
                  massa. Curabitur tempus, quam nec finibus tempor, ex sapien
                  feugiat mauris, at congue purus lectus fringilla enim. Integer
                  a felis felis. Cras ultricies dolor eget ante volutpat
                  ullamcorper.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant='contained'
                  onClick={() =>
                    history.push(`/changenewspaper/${NewsPaper.id}`)
                  }
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default NewspaperInfo;
