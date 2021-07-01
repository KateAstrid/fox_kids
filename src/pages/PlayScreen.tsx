import { useState } from 'react'
import PicturesGrid  from '../components/PicturesGrid'
import { Grid } from '@material-ui/core'
import TimeLeft from '../components/TimeLeft'
import PlayScore from '../components/PlayScore'
import { Username  } from '../utils/interfaces'
import { useStyles } from '../style/PagesStyle'

const PlayScreen = ({ username }: Username) => {
    const [score, setScore] = useState(0)
    const classes = useStyles();

    return (
        <Grid>
            <Grid className={classes.playinfo} container>
                <PlayScore score={score} />
                <TimeLeft score={score} username={username} />
            </Grid>
            <PicturesGrid score={score} setScore={setScore} />
        </Grid>
    )
}

export default PlayScreen



