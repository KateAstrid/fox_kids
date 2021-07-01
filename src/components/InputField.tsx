import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core'
import { KeyboardEvent } from 'react'
import { useStyles } from '../style/ComponentsStyle'
import Text from './Text'

interface InputProps {
    value: string
    onChange: (value: string) => void
    error: boolean
    onKeyPress: (event: KeyboardEvent) => void
}

const InputField = ({ value, onChange, error, onKeyPress }: InputProps) => {
    const classes = useStyles();

    return (
        <Grid className={classes.inputComponent}>
            <Text text="Name:" />
            <TextField
                className={classes.input}
                error={error}
                helperText={error ? "field is required" : ""}
                variant="outlined"
                label="Enter your name"
                value={value}
                onChange={event => onChange(event.target.value)}
                onKeyPress={(event: KeyboardEvent ) => onKeyPress(event)}
            /> 
        </Grid>
    )
}

export default InputField