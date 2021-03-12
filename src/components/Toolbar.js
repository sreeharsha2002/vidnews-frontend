import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {Box, InputAdornment, makeStyles, SvgIcon, TextField, Typography,} from '@material-ui/core'
import {Search as SearchIcon} from 'react-feather'
import Grid from '@material-ui/core/Grid'

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
            <Box mt={3}>
                {/*<Card raised>*/}
                {/*    <CardContent>*/}
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Typography
                            color="textPrimary"
                            // gutterBottom
                            variant="h4"
                        >
                            {rest.title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Box marginLeft="auto" maxWidth={500}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon fontSize="small" color="action">
                                                <SearchIcon/>
                                            </SvgIcon>
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Search product"
                                variant="outlined"
                            />
                        </Box>
                    </Grid>
                </Grid>
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
