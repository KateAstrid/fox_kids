import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import ButtonDefault from '../components/ButtonDefault'
import { MouseEvent } from 'react'
import { useStyles } from '../style/PagesStyle'
import ScoreTable from '../components/ScoreTable'

const Scoreboard = () => {
    const history = useHistory()
    const classes = useStyles()

    const handleClick = (event: MouseEvent, path: string) => {
        event.preventDefault()
        if (path === "./") {
            history.push(path)
            //reload page to clean username in input field
            history.go(0)
        } else history.push(path)
    }

    return (
        <Grid className={classes.scoreboardContainer}>
            <ScoreTable />
            <Grid className={classes.buttonsContainer} container>
                <ButtonDefault 
                    buttonText="To Welcome Screen" 
                    onClick={(event: MouseEvent) => handleClick(event, "./")} 
                />
                <ButtonDefault 
                    buttonText="PLAY!" 
                    onClick={(event: MouseEvent) => handleClick(event, "./playscreen")} 
                />
            </Grid>
        </Grid>
    );
}



export default Scoreboard