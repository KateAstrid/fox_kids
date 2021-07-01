import { MouseEvent } from 'react'
import { useStyles } from '../style/PagesStyle'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const NoFound = () => {
    const classes = useStyles()
    const history = useHistory()
    const handleClick = (event: MouseEvent) => {
        event.preventDefault()
        history.push("./")
    }
    return (
        <Typography 
            variant="h6" 
            gutterBottom 
            className={classes.noFound} 
            onClick={(event: MouseEvent) => handleClick(event)}
        >
            No such page. Return to WelcomeScreen
        </Typography>
    )
}

export default NoFound