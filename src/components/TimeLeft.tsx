import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Text from './Text';
import Number from './Number';
import { useState, useEffect } from 'react';
import { saveData } from '../utils/data';
import { useStyles } from '../style/ComponentsStyle'
import { PreData } from '../utils/interfaces'

const TimeLeft = ({ score, username }: PreData) => {
    const [counter, setCounter] = useState(30);
    const classes = useStyles()
    const history = useHistory();

    useEffect(() => {
        if (counter !== 0) {
            const timer = setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        } else {
            saveData({ username, score })
            history.push('/scoreboard')
        }
    }, [counter]);

    return (
        <Grid className={classes.time} container >
            <Text text="Time Left: " />
            <Number text={counter} lastSeconds={ counter < 6 } />
        </Grid>
    )
}

export default TimeLeft