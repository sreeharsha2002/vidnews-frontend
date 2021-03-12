import React, {Fragment} from 'react'
import {Container, makeStyles} from '@material-ui/core'
import Page from '../Page'
import Footer from '../Footer'
import LoggedNavbar from '../LoggedNavbar'
import EditForm from './EditForm'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
}))

const Account = () => {
    const classes = useStyles()

    return (
        <Fragment>
            <LoggedNavbar/>
            <Page className={classes.root} title="Account">
                <Container maxWidth="lg">
                    <EditForm/>
                </Container>
            </Page>
            <Footer/>
        </Fragment>
    )
}

export default Account
