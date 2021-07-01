import '@fontsource/roboto'
import { Typography } from '@material-ui/core'

interface Title {
    title: string
}

const PageTitle = ({ title }: Title) => {
    return (
        <Typography variant="h4" gutterBottom>
            { title }
        </Typography>
    )
}

export default PageTitle