import { useState } from 'react'
import ButtonDefault from '../components/ButtonDefault'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import InputField from '../components/InputField'
import { MouseEvent, KeyboardEvent } from 'react'
import { UsernameProps } from '../utils/interfaces'
import { useStyles } from '../style/PagesStyle'

const WelcomeScreen = ({ username, setUsername }: UsernameProps) => {
    const [error, setError] = useState(false)
    const classes = useStyles()
    const history = useHistory()

    const handleClick = (event: MouseEvent) => {
        event.preventDefault()
        if (username) {
            setError(false)
            history.push('/playscreen')
        } else setError(true)
    }

    const keyPress = (event: KeyboardEvent ) => {
        if (event.key === "Enter") {
            if (username) {
                setError(false)
                history.push('/playscreen')
            } else setError(true)
        }
    }

    return (
        <Grid className={classes.welcomeContainer} container>
            <InputField 
                value={username} 
                onChange={(value: string) => setUsername(value)} 
                error={error} 
                onKeyPress={(event: KeyboardEvent ) => keyPress(event)}
            />
            <ButtonDefault 
                buttonText="PLAY" 
                disable={ username ? false : true }
                onClick={(event: MouseEvent) => handleClick(event)}
            />
        </Grid>
    )
}

export default WelcomeScreen