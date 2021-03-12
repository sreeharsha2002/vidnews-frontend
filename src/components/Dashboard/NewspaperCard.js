import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },

    statsIcon: {
        marginRight: theme.spacing(1),
    },
    button: {
        background: '#48B646',
        '&:hover': {
            background: '#48D400',
        },
    },
}))

const NewspaperCard = ({className, product, history, ...rest}) => {
    const classes = useStyles()
    const [shadow, setShadow] = useState(false)
    const onMouseOver = () => setShadow(true)
    const onMouseOut = () => setShadow(false)

    return (
        <Card
            className={classes.root}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            raised={shadow}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={product.media}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {product.title}
                    </Typography>
                    {/* <Typography align="center" color="textPrimary" variant="body1">
            {product.description}
          </Typography> */}
                </CardContent>
            </CardActionArea>
            <Box flexGrow={1}/>
            <Divider/>
            <CardActions>
                <Button
                    fullWidth
                    size="medium"
                    variant="contained"
                    className={classes.button}
                    href={`/newspaperinfo/${product.id}`}
                >
                    Subscribe
                </Button>
            </CardActions>
        </Card>
    )
}

NewspaperCard.propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
}

export default NewspaperCard
