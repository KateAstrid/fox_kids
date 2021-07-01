import { Grid } from '@material-ui/core';
import Text from './Text'; 
import '@fontsource/roboto';
import Number from './Number';
import { useStyles  } from '../style/ComponentsStyle';

interface Score {
    score: number
}

const PlayScore = ({ score }: Score) => {
    const classes = useStyles()

    return (
        <Grid className={classes.score} container>
            <Text text="Score: " />
            <Number text={score} />
        </Grid>
    )
}

export default PlayScore