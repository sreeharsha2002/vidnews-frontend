import React, {useState} from 'react'
import {Box, Container, Grid, makeStyles} from '@material-ui/core'
import Page from './Page'
import Toolbar from './Toolbar'
import NewspaperCard from './Dashboard/NewspaperCard'
import Footer from './Footer'
import Navbar from './LoggedNavbar'
import data from './Dashboard/data'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
    card: {
        height: '100%',
    },
}))

const AllNewspapers = ({history}) => {
    const classes = useStyles()
    const [newspapers] = useState(data)

    return (
        <div>
            <Navbar/>
            <Page className={classes.root} title="All Avatars">
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            VIDNEWS
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Something short and leading about the collection below—its
                            contents, the creator, etc. Make it short and sweet, but not too
                            short so folks don&apos;t simply skip over it entirely.
                        </Typography>
                    </Container>
                </div>
                <Container maxWidth="lg">
                    <Toolbar title="All Newspapers"/>
                </Container>
                <Container>
                    <Box mt={3}>
                        <Grid container spacing={6}>
                            {newspapers.map((product) => (
                                <Grid item key={product.id} lg={3} md={4} xs={6}>
                                    <NewspaperCard
                                        className={classes.card}
                                        product={product}
                                        history={history}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Page>
            <Footer/>
        </div>
    )
}

export default AllNewspapers
