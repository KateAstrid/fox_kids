import { useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { MouseEvent } from 'react'
import { useStyles  } from '../style/ComponentsStyle'

const pictures = [
    {src: "cat1.jpeg", fox: false},
    {src: "cat2.jpeg", fox: false},
    {src: "cat3.jpeg", fox: false},
    {src: "bird.jpeg", fox: false},
    {src: "bird2.jpeg", fox: false},
    {src: "dog1.jpeg", fox: false},
    {src: "dog2.jpeg", fox: false},
    {src: "dog3.jpeg", fox: false},
    {src: "fox.jpeg", fox: true},
]

interface Image {
    src: string
    fox: boolean
}

interface ScoreProps {
    score: number
    setScore: (score: number) => void
}

const PicturesGrid = ({ score, setScore }: ScoreProps) => {
    const [click, setClick] = useState(0)
    const classes = useStyles();
    const mixedPictures = [...pictures]
    mixedPictures.sort(() => 0.5 - Math.random());

    const handleClick = (event: MouseEvent, fox: boolean) => {
        event.preventDefault()
        setClick(click + 1)
        const newScore = score

        const result = fox 
            ? setScore(newScore + 1)
            : (newScore > 0) 
                ? setScore(newScore - 1)
                : setScore(0)
        return result
    }

    return (
        <GridList className={classes.picGrid} cols={3}>
            {mixedPictures.map((image: Image) => {
                return (
                    <GridListTile key={image.src}>
                        <img 
                            src={image.src} 
                            alt="animal"
                            onClick={(event: MouseEvent) => handleClick(event, image.fox)}
                        />
                    </GridListTile>
                )
            })}
        </GridList>
    )
}

export default PicturesGrid
