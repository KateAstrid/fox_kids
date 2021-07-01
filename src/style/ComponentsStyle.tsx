import { makeStyles, withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export const useStyles = makeStyles(theme => ({
    time: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    score: {
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },

    text: {
        marginRight: "0.2em",
    },

    button: {
        marginTop: "3em",
        width: '20em',
        alignItems: "center",
        height: "3.2em",
    },

    inputComponent: {
        marginBottom: "10em",
        width: "20em",
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-around",
        alignItems: "center",

        "& .MuiOutlinedInput-input": {
            height: "1em",
            padding: "1.1em 1em",
        }
    },

    input: {
        marginBottom: "0.35em",
    },

    lastSeconds: {
        color: "red",
        width: "30px",
        height: "30px",
        animation: `$lastSeconds 1000ms ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 29,
        display: "flex",
        alignItems: "center",
    },

    allTime: {
        width: "30px",
        display: "flex",
        alignItems: "center",
        height: "30px", 
    },

    "@keyframes lastSeconds": {
        "0%": {
            fontSize: "1.8em"
        },
        "100%": {
            fontSize: "1.25em"
        },
    },
    
    picGrid: {
        width: "36em",
        height: "36em",
        cursor: "pointer",
    },

    scoreTable: {
        marginTop: "2em",
    },
}))

export const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.warning.light,
    },
}))(TableCell);
  
export const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);