import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  GridList,
  GridListTile,
  ListSubheader,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import data2 from '../Dashboard/data2';
// import IconButton from '@material-ui/core/IconButton';
// import CheckIcon from '@material-ui/icons/Check';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#F4F4F4',
  },
  root: {},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 450,
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },

  type: {
    paddingTop: 60,
    paddingBottom: 0,
  },
}));

const EditForm = ({ className, ...rest }) => {
  const classes = useStyles();
  const [avatars] = useState(data2);
  const [language, setLanguage] = useState('');
  const [voice, setVoice] = useState('');
  const [tags, settags] = useState([]);
  const [chosenAvatar, setAvatar] = useState(null);

  return (
    <form
      autoComplete='off'
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card className={classes.card}>
        <CardHeader title='Times of India' />

        <CardContent>
          <Grid container spacing={3} justify='center'>
            {chosenAvatar && (
              <Fragment>
                <Grid item md={3} xs={12}>
                  <Box paddingTop={5}>
                    <Typography variant='h5' className={classes.type}>
                      Choosen Avatar:
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Box
                    alignItems='center'
                    display='flex'
                    flexDirection='column'
                  >
                    <Box border={1} p={1} borderRadius={10}>
                      {' '}
                      <img
                        className={classes.avatar}
                        src={chosenAvatar}
                        alt={'avatar'}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Fragment>
            )}
            <Grid item xs={12}>
              <div className={classes.wrapper}>
                <GridList
                  className={classes.gridList}
                  cellHeight={200}
                  spacing={1}
                >
                  <GridListTile
                    key='Subheader'
                    cols={2}
                    style={{ height: 'auto' }}
                  >
                    <Container>
                      <Grid container spacing={3}>
                        <Grid item>
                          <Typography variant='h5' align='center'>
                            Upload an Avatar:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TextField name='upload-photo' type='file' />
                          <label htmlFor='contained-button-file'>
                            <Button
                              variant='contained'
                              color='primary'
                              component='span'
                              size='small'
                            >
                              Upload
                            </Button>
                          </label>
                        </Grid>
                      </Grid>
                    </Container>
                    <Typography align='center' variant='h5'>
                      OR
                    </Typography>

                    <ListSubheader
                      component='div'
                      style={{ fontSize: 20, color: 'black' }}
                    >
                      Choose an Avatar
                    </ListSubheader>
                  </GridListTile>
                  {avatars.map((tile) => (
                    <GridListTile key={tile.id} cols={0.5}>
                      <Button onClick={() => setAvatar(tile.media)}>
                        <img
                          src={tile.media}
                          alt={'avatar'}
                          style={{ padding: 10 }}
                        />
                      </Button>
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='select'
                label='Choose Language'
                value={language}
                variant='outlined'
                onChange={(e) => setLanguage(e.target.value)}
                select
              >
                <MenuItem value='Hindi'>Hindi</MenuItem>
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='Telugu'>Telugu</MenuItem>
                <MenuItem value='Gujarati'>Gujarati</MenuItem>
                <MenuItem value='Marathi'>Marathi</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='select'
                fullWidth
                label='Choose Voice'
                value={voice}
                variant='outlined'
                onChange={(e) => setVoice(e.target.value)}
                select
              >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='select'
                fullWidth
                label='Add tag'
                value=''
                variant='outlined'
                onChange={(e) => settags([...tags, e.target.value])}
                select
              >
                <MenuItem value='Political'>Political</MenuItem>
                <MenuItem value='Bussiness'>Bussiness</MenuItem>
                <MenuItem value='Sports'>Sports</MenuItem>
              </TextField>
              <Container style={{ paddingTop: 20, paddingBottom: 5 }}>
                {tags.length !== 0 && (
                  <Fragment>
                    <Typography style={{ paddingBottom: 6 }}>Tags:</Typography>
                  </Fragment>
                )}
                <Grid container spacing={3}>
                  {tags.map((v, i) => (
                    <Fragment>
                      <Grid item key={i}>
                        <Box border={1} p={1} borderRadius={6}>
                          <Typography>
                            {v}{' '}
                            {/* <Button
                              style={{ paddingLeft: 0 }}
                              size='small'
                              onClick={() => {
                                console.log(i);
                                tags.splice(i, 1);
                                console.log(tags);
                                settags(tags);
                                console.log(tags);
                              }}
                            >
                              <DeleteIcon />
                            </Button> */}
                          </Typography>
                        </Box>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='time'
                label='Time'
                type='time'
                defaultValue='07:30'
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                variant='outlined'
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Box display='flex' justifyContent='flex-start' p={2}>
                <Button
                  color='primary'
                  variant='contained'
                  href='/mynewspapers'
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

EditForm.propTypes = {
  className: PropTypes.string,
};

export default EditForm;
