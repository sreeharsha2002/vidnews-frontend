import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Footer from './Footer'
import LoggedNavbar from './LoggedNavbar'

import '../App.css'

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
})

class About extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <React.Fragment>
                <CssBaseline/>
                <LoggedNavbar/>
                <main style={{backgroundColor: 'white', height: '70vh'}}>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Typography variant="h4" align="center" color="textPrimary">
                            About Us
                        </Typography>
                        <br/>
                        <Typography variant="body1" align="center" color="textSecondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            aliquam vitae magna eget gravida. Curabitur tristique purus justo,
                            ut tincidunt tortor ornare id. Donec sed condimentum velit,
                            lobortis posuere lacus. Nunc metus nibh, hendrerit ac congue eget,
                            tincidunt nec est. Curabitur at faucibus quam. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            curae; Fusce venenatis, mi id tempus dignissim, dui odio vulputate
                            nibh, malesuada venenatis purus ante eget nunc. Proin dapibus,
                            Fusce est dolor, vulputate gravida quam at, viverra feugiat
                            tortor. Donec aliquet commodo erat, eu cursus sapien elementum sit
                            amet. Nulla ut sodales massa. Curabitur tempus, quam nec finibus
                            tempor, ex sapien feugiat mauris, at congue purus lectus fringilla
                            enim. Integer a felis felis. Cras ultricies dolor eget ante
                            volutpat ullamcorper. Integer auctor porta venenatis. Praesent
                            dolor metus, consequat et tincidunt Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Cras ut fringilla magna. Pellentesque
                            habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut eros risus, lobortis eget diam eu, porttitor tempus
                            tortor. Fusce est dolor, vulputate gravida quam at, viverra
                            feugiat tortor. Donec aliquet commodo erat, eu cursus sapien
                            elementum sit amet. Nulla ut sodales massa. Curabitur tempus, quam
                            nec finibus tempor, ex sapien feugiat mauris, at congue purus
                            lectus fringilla enim. Integer a felis felis. Cras ultricies dolor
                            eget ante volutpat ullamcorper.
                        </Typography>
                    </Container>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(About)
