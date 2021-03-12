import React, { Fragment, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from '../Page';
import MyNewsPaper from './MyNewsPaper';
import Footer from '../Footer';
import LoggedNavbar from '../LoggedNavbar';
import data from './data';
import ToolBar from '../Dashboard/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const MyNewsPapers = ({ history }) => {
  const classes = useStyles();
  const [values] = useState(data);

  return (
    <Fragment>
      <LoggedNavbar />
      <Container>
        <ToolBar title='Subscribed Newspapers' />
      </Container>
      <Page className={classes.root} title='MyNewsPapers'>
        <Container maxWidth='lg'>
          {values.map((value) => (
            <MyNewsPaper key={value.id} value={value} history={history} />
          ))}
        </Container>
      </Page>
      <Footer />
    </Fragment>
  );
};

export default MyNewsPapers;
