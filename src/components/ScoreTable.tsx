import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import { getData } from '../utils/data'
import { TableRowProps } from '../utils/interfaces'
import { StyledTableCell, StyledTableRow, useStyles } from '../style/ComponentsStyle'

const ScoreTable = () => {
    const classes = useStyles()
    const data = getData()
    
    return (
        <TableContainer component={Paper} className={classes.scoreTable}>
            <Table >
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Rank</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Score</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.map((element: TableRowProps, index: number) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                            <StyledTableCell align="right">{element.username}</StyledTableCell>
                            <StyledTableCell align="right">{element.date}</StyledTableCell>
                            <StyledTableCell align="right">{element.score}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScoreTable