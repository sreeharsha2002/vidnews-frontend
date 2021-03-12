import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Card, CardActionArea, CardMedia, makeStyles} from '@material-ui/core'

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

const NewspapercheckBox = ({className, product, ...rest}) => {
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
            </CardActionArea>
        </Card>
    )
}

NewspapercheckBox.propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
}

export default NewspapercheckBox
