import { useState } from 'react';
import WelcomeScreen from './pages/WelcomeScreen';
import PlayScreen from './pages/PlayScreen';
import Scoreboard from './pages/Scoreboard';
import PageTitle from './components/PageTitle';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStyles } from './style/PagesStyle';
import NoFound from './pages/NoFound';

const App = () => {
    const [username, setUsername] = useState('')
    const classes = useStyles()
    return (
        <Router>
            <Grid className={classes.mainContainer} container>
            <PageTitle title="Click the Fox! Game" />
            
                <Switch>
                    <Route exact path="/"><WelcomeScreen username={username} setUsername={setUsername}/></Route>
                    <Route exact path="/playscreen"><PlayScreen username={username}/></Route>
                    <Route exact path="/scoreboard"><Scoreboard /></Route>
                    <Route path="*"><NoFound /></Route>
                </Switch>
            </Grid>
        </Router>
    );
}

export default App;
