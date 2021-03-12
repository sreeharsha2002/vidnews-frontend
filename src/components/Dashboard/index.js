import React, {useState} from 'react'
import {Box, Button, Container, Divider, Grid, makeStyles,} from '@material-ui/core'
import Page from '../Page'
import Toolbar from './Toolbar'
import NewspaperCard from './NewspaperCard'
import AvatarCard from './AvatarCard'
import Footer from '../Footer'
import Navbar from '../LoggedNavbar'
import data from './data'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Typography from '@material-ui/core/Typography'
import data2 from './data2'

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

const AllNewspapers = (props) => {
    const classes = useStyles()
    const [newspapers] = useState(data)
    const [avatars] = useState(data2)

    return (
        <div>
            <Navbar/>
            <Page className={classes.root} title="Dashboard">
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
                <Divider/>
                <Container maxWidth="xl">
                    <Toolbar title="Popular Newspapers"/>
                </Container>
                <Container>
                    <Box mt={3}>
                        <Grid container spacing={6}>
                            {newspapers.map((product) => (
                                <Grid item key={product.id} lg={3} md={4} xs={6}>
                                    <NewspaperCard className={classes.card} product={product}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <Button
                            color="primary"
                            endIcon={<ArrowRightIcon/>}
                            size="small"
                            variant="contained"
                            href="/allnewspapers"
                        >
                            View all Newspapers
                        </Button>
                    </Box>
                </Container>
                <Divider/>
                <Container maxWidth="xl">
                    <Toolbar title="Popular Avatars"/>
                </Container>
                <Container style={{paddingLeft: 90}}>
                    <Box mt={3}>
                        <Grid container spacing={6}>
                            {avatars.map((product) => (
                                <Grid item key={product.id} lg={3} md={4} xs={6}>
                                    <AvatarCard
                                        className={classes.card}
                                        product={product}
                                        history={props.history}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <Button
                            color="primary"
                            endIcon={<ArrowRightIcon/>}
                            size="small"
                            variant="contained"
                            href="/allavatars"
                        >
                            View all Avatars
                        </Button>
                    </Box>
                </Container>
            </Page>
            <Footer/>
        </div>
    )
}

export default AllNewspapers
