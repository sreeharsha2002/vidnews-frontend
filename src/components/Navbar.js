import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LogIn from './LogIn';
import Register from './Register';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import '../App.css';
import { ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(90deg,#53D348,#69C7D3)',
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    list: {
      width: 250,
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [registerOpen, setRegisterOpen] = React.useState(false);

  const handleRegisterClickOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = (value) => {
    setRegisterOpen(false);
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
  const handleLogInClickOpen = () => {
    setLogInOpen(true);
  };

  const handleLogInClose = (value) => {
    setLogInOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const [state, setState] = React.useState(false);

  const toggleDrawer = (newState) => (event) => {
    setState(newState);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <InfoOutlinedIcon />
        <p>About</p>
      </MenuItem>
      <MenuItem onClick={handleRegisterClickOpen}>
        <LockOpenIcon />
        <p>Register</p>
      </MenuItem>
      <MenuItem onClick={handleLogInClickOpen}>
        <LockOpenIcon />
        <p>Log in</p>
      </MenuItem>
    </Menu>
  );

  const list = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        style={{
          background: 'linear-gradient(90deg,#53D348,#69C7D3)',
        }}
      >
        <ListItem button href='/aboutus'>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText color='inherit'>About</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText color='inherit' onClick={handleRegisterClickOpen}>
            Register
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText color='inherit' onClick={handleLogInClickOpen}>
            Log in
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar className={classes.appBar} position='fixed'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            VIDNEWS
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button color='inherit' href='/aboutus'>
              <InfoOutlinedIcon />
              About
            </Button>
            <Button color='inherit' onClick={handleRegisterClickOpen}>
              <LockOpenIcon />
              Register
            </Button>
            <Button color='inherit' onClick={handleLogInClickOpen}>
              <LockOpenIcon />
              Log in
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={toggleDrawer(true)}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
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
      <SwipeableDrawer
        anchor={'top'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
