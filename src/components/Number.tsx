import '@fontsource/roboto'
import { Typography } from '@material-ui/core'
import { useStyles } from '../style/ComponentsStyle'
import { TextProps } from '../utils/interfaces'

const Number = ({ text, lastSeconds }: TextProps) => {
    const classes = useStyles()
    return (
        <Typography 
            variant="h6" 
            gutterBottom 
            className={ lastSeconds ? classes.lastSeconds : classes.allTime}
        >
            { text }
        </Typography>
    )
}

export default Number