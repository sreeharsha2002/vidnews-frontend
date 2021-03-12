import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 150,
    width: 150,
  },
  type: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 0,
  },
  gridbutton: {
    marginLeft: 'auto',
  },
  focard: {
    backgroundColor: '#F4F4F4',
  },
  fomynewspaper: {
    paddingTop: 40,
  },
}));

const Mynewspaper = ({ value, history }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.fomynewspaper}>
        <Card className={classes.focard}>
          <CardHeader title={value.NewspaperName} />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item>
                <Box paddingTop={5}>
                  <Typography className={classes.type}>
                    <strong>Avatar:</strong>
                  </Typography>
                </Box>
              </Grid>

              <Grid item>
                <Avatar
                  className={classes.avatar}
                  variant='square'
                  src={value.Avatar}
                />
              </Grid>
              <Grid item className={classes.gridbutton}>
                <Typography className={classes.type}>
                  {' '}
                  <strong>Newspaper Name </strong> : {value.NewspaperName}
                </Typography>
                <Typography className={classes.type}>
                  <strong>Language</strong>: {value.Language}
                </Typography>
                <Typography className={classes.type}>
                  <strong>Time</strong>: {value.time}
                </Typography>
              </Grid>
              <Grid item className={classes.gridbutton}>
                <Typography className={classes.type}>
                  {' '}
                  <strong>Voice</strong> : {value.voice}
                </Typography>
                <Typography className={classes.type}>
                  <strong>Tags</strong>: {value.tags}
                </Typography>
              </Grid>
              <Grid item className={classes.gridbutton}>
                <Box display='flex' justifyContent='flex-end' p={2}>
                  <Button
                    color='primary'
                    variant='contained'
                    onClick={() => history.push(`/changenewspaper/${value.id}`)}
                  >
                    <EditIcon />
                  </Button>
                </Box>
                <Box display='flex' justifyContent='flex-end' p={2}>
                  <Button color='secondary' variant='contained'>
                    <DeleteIcon />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Fragment>
  );
};

Mynewspaper.propTypes = {
  value: PropTypes.object,
};

export default Mynewspaper;
