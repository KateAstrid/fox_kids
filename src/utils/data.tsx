import { TableRowProps, PreData } from "./interfaces"

export const getData = () => {
    const unserialData = localStorage.getItem('data')
    const data: Array<TableRowProps> = unserialData ? JSON.parse(unserialData) : []

    return data
}

export const saveData = ({ username, score }: PreData ) => {
    const data = getData()
    const user: TableRowProps = {
        username,
        date: (new Date()).toDateString(),
        score,
    }

    data.push(user)
    localStorage.setItem('data', JSON.stringify(data))
}