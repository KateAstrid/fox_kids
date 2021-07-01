import '@fontsource/roboto'
import { Typography } from '@material-ui/core'
import { useStyles  } from '../style/ComponentsStyle'
import { TextProps } from '../utils/interfaces'

const Text = ({ text }: TextProps) => {
    const classes = useStyles()
    return (
        <Typography 
            variant="h6" 
            gutterBottom
            className={classes.text} 
        >
            { text }
        </Typography>
    )
}

export default Text