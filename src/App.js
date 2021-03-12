import './App.css'
import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import {createMuiTheme} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'
import Dashboard from './components/Dashboard/index'
import Profile from './components/profile/index'
import MyNewsPapers from './components/mynewspapers/index'
import {makeStyles} from '@material-ui/core/styles'
import AllNewspapers from './components/AllNewspapers'
import AllAvatars from './components/AllAvatars'
import About from './components/About'
import Help from './components/Help'
import NewspaperInfo from './components/NewspaperInfo'
import ChangeAvatar from './components/ChangingAvatar/ChangeAvatar'
import ChangeNewspaper from './components/ChangeNewspaper'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}))
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Asap Condensed, sans-serif',
    },
})

function App() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Router>
                    <Fragment>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/mynewspapers" component={MyNewsPapers}/>
                            <Route exact path="/dashboard" component={Dashboard}/>
                            <Route exact path="/allnewspapers" component={AllNewspapers}/>
                            <Route exact path="/allavatars" component={AllAvatars}/>
                            <Route exact path="/aboutus" component={About}/>
                            <Route exact path="/help" component={Help}/>
                            <Route
                                exact
                                path="/newspaperinfo/:id"
                                component={NewspaperInfo}
                            />
                            <Route exact path="/changeavatar/:id" component={ChangeAvatar}/>
                            <Route
                                exact
                                path="/changenewspaper/:id"
                                component={ChangeNewspaper}
                            />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        </ThemeProvider>
    )
}

export default App
