import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    mainContainer: {
        margin: "10em 1em",
        alignItems: "center",
        flexDirection: "column",
    },

    welcomeContainer: {
        alignItems: "center",
        flexDirection: "column",
    },

    playinfo: {
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "nowrap",
        height: "3em",
    },

    scoreboardContainer: {
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
    },

    buttonsContainer: {
        justifyContent: "space-between", 
    },
    
    noFound: {
        cursor: "pointer",
        "&:hover": {
            color: "#3f51b5"
        }
    }
})