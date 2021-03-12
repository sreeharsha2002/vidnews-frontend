import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  makeStyles,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from '../Footer';

import LoggedNavbar from '../LoggedNavbar';

import '../../App.css';
import data from '../Dashboard/data';
import data2 from '../Dashboard/data2';
import Checkbox from '@material-ui/core/Checkbox';

import Page from '../Page';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },

  button: {
    background: '#48B646',
    '&:hover': {
      background: '#48D400',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  chosen: {
    paddingBottom: 50,
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    width: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const ChangeAvatar = ({ className, match, history }) => {
  const classes = useStyles();
  const [avatars] = useState(data2);
  const [newspapers] = useState(data);

  const [isChecked, setIsChecked] = useState(newspapers.slice().fill(false));

  const avatararray = avatars.filter((item) => item.id === match.params.id);
  const avatar = avatararray[0];

  const handleChange = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };
  const onSubmit = () => {
    var arr = [];
    isChecked.map((v, i) => v && arr.push(newspapers[i]));
    console.log(arr);
    history.push('/mynewspapers');
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <LoggedNavbar />
      <Page className={classes.root}>
        <div className={classes.heroContent}>
          <Container className={classes.chosen}>
            <Typography variant='h4' align='center'>
              Choosen Avatar
            </Typography>
            <br />
            <Grid container spacing={3} justify='center'>
              <Grid item>
                <img src={avatar.media} alt={'avatar'} style={{ width: 200 }} />
              </Grid>
            </Grid>
          </Container>

          <Container>
            <Box mt={3}>
              <Grid container spacing={6}>
                <Typography
                  variant='h4'
                  align='center'
                  style={{ paddingBottom: 20 }}
                >
                  Select Newspapers for this Avatar
                </Typography>
                <FormControl component='fieldset'>
                  <FormGroup row={true}>
                    {newspapers.map((product, i) => (
                      <Grid
                        item
                        key={i}
                        lg={3}
                        md={4}
                        xs={6}
                        style={{ padding: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              color='primary'
                              checked={isChecked[i]}
                              onChange={() => handleChange(i)}
                              name={product.title}
                            />
                          }
                          label={
                            <img
                              src={product.media}
                              style={{ height: '15vh' }}
                              alt={'avatar'}
                            />
                          }
                        />
                      </Grid>
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
            </Box>
          </Container>
          <Container style={{ paddingTop: 100 }}>
            <Grid container justify='center'>
              <Button
                variant='contained'
                color='primary'
                size='large'
                onClick={onSubmit}
              >
                <Typography>Add Avatars to Selected Newspapers</Typography>
              </Button>
            </Grid>
          </Container>
        </div>
      </Page>
      <Footer />
    </React.Fragment>
  );
};

export default ChangeAvatar;
