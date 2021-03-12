import React from 'react'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import Copyright from './Copyright'
import Link from '@material-ui/core/Link'

import '../App.css'

const useStyles = (theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#5ECD8E',
        padding: theme.spacing(6),
        marginTop: 'auto',
    },
})

const social = [
    {name: 'Twitter', icon: TwitterIcon},
    {name: 'LinkedIn', icon: LinkedInIcon},
    {name: 'Facebook', icon: FacebookIcon},
]

class Footer extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    {social.map((icon, key) => (
                        <Link variant="body2" href="#" key={key}>
                            <icon.icon/>
                        </Link>
                    ))}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Email: abc@gmail.com.
                </Typography>
                <Copyright/>
            </footer>
        )
    }
}

export default withStyles(useStyles)(Footer)
