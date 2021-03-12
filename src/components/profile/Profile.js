import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import photo from '../../assets/mark.jpg';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
} from '@material-ui/core';

const user = {
  avatar: photo,
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7',
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 250,
    width: 250,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems='center' display='flex' flexDirection='column'>
          <Avatar className={classes.avatar} src={user.avatar} />
        </Box>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<CloudUploadIcon />}
          color='primary'
          fullWidth
          variant='contained'
          component='label'
        >
          Upload picture
          <input type='file' accept='image/*' hidden />
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
