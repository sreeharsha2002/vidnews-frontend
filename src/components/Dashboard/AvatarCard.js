import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Card, CardActionArea, CardMedia, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 170,
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

const AvatarCard = ({className, product, history, ...rest}) => {
    const classes = useStyles()
    const [shadow, setShadow] = useState(false)
    const onMouseOver = () => setShadow(true)
    const onMouseOut = () => setShadow(false)
    const goto = () => {
        history.push(`/changeavatar/${product.id}`)
    }
    return (
        <Card
            className={classes.root}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            raised={shadow}
        >
            <CardActionArea onClick={goto}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={product.media}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
    )
}

AvatarCard.propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
}

export default AvatarCard
