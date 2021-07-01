import { MouseEvent } from 'react'
import '@fontsource/roboto'
import { Button } from '@material-ui/core'
import { useStyles } from '../style/ComponentsStyle'

interface ButtonProps  {
    buttonText: string
    onClick: (event: MouseEvent) => void
    disable?: boolean
}

const ButtonDefault = ({ buttonText, onClick, disable }: ButtonProps) => {
    const classes = useStyles()
    return (
        <Button 
            className={classes.button}
            variant="contained" 
            color={disable ? "secondary" : "primary"} 
            onClick={(event: MouseEvent) => onClick(event)}
        >
            { buttonText }
        </Button>
    )
}

export default ButtonDefault