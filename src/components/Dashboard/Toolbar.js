import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {Box, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {},
    importButton: {
        marginRight: theme.spacing(1),
    },
    exportButton: {
        marginRight: theme.spacing(1),
    },
}))

const Toolbar = ({className, ...rest}) => {
    const classes = useStyles()

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Box m={6}>
                {/*<Card raised>*/}
                {/*    <CardContent>*/}
                {/*<Grid container wrap="nowrap" spacing={2}>*/}
                {/*    <Grid item>*/}
                <Typography
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                    variant="h4"
                >
                    {rest.title}
                </Typography>
                {/*</Grid>*/}
                {/*<Grid item xs>*/}
                {/*    <Box marginLeft="auto" maxWidth={500}>*/}
                {/*        <TextField*/}
                {/*            fullWidth*/}
                {/*            InputProps={{*/}
                {/*                startAdornment: (*/}
                {/*                    <InputAdornment position="start">*/}
                {/*                        <SvgIcon fontSize="small" color="action">*/}
                {/*                            <SearchIcon/>*/}
                {/*                        </SvgIcon>*/}
                {/*                    </InputAdornment>*/}
                {/*                ),*/}
                {/*            }}*/}
                {/*            placeholder="Search product"*/}
                {/*            variant="outlined"*/}
                {/*        />*/}
                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*</Grid>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </Box>
        </div>
    )
}

Toolbar.propTypes = {
    className: PropTypes.string,
}

export default Toolbar
