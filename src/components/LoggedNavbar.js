import React from 'react'
import {fade, makeStyles} from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {LogOut as LogOutIcon, User as UserIcon} from 'react-feather'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import '../App.css'
import {Divider} from '@material-ui/core'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'

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
}))

export default function Navbar() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'

    const [state, setState] = React.useState(false)

    const toggleDrawer = (newState) => (event) => {
        setState(newState)
    }

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List
                style={{
                    background: 'linear-gradient(90deg,#53D348,#69C7D3)',
                }}
            >
                <ListItem button href="/dashboard">
                    <ListItemText color="inherit">Dashboard</ListItemText>
                </ListItem>
                <ListItem button href="/aboutus">
                    <ListItemText color="inherit">About Us</ListItemText>
                </ListItem>
                <ListItem button href="/help">
                    <ListItemText color="inherit">Help</ListItemText>
                </ListItem>
                <ListItem button href="/profile">
                    <ListItemText color="inherit">Profile</ListItemText>
                </ListItem>
                <ListItem button href="/">
                    <ListItemText color="inherit">Log Out</ListItemText>
                </ListItem>
            </List>
        </div>
    )

    return (
        <div>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        VIDNEWS
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" href="/dashboard">
                            Dashboard
                        </Button>
                        <Button color="inherit" href="/mynewspapers">
                            My Newspapers
                        </Button>
                        <Button color="inherit" href="/aboutus">
                            About Us
                        </Button>
                        <Button color="inherit" href="/help">
                            Help
                        </Button>
                        <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            endIcon={<ArrowDropDownIcon/>}
                            color="inherit"
                        >
                            Username
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="menu-list-grow"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem>
                                                    <Button variant="text" href="/profile">
                                                        <UserIcon/> Profile
                                                    </Button>
                                                </MenuItem>
                                                <Divider/>
                                                <MenuItem>
                                                    <Button variant="text" href="/">
                                                        <LogOutIcon/> Logout
                                                    </Button>
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar/>

            <SwipeableDrawer
                anchor={'top'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    )
}
