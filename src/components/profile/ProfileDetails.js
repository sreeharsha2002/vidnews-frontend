import React, {useState} from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {Box, Button, Card, CardContent, CardHeader, Grid, makeStyles, TextField,} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {},
}))

const ProfileDetails = ({className, ...rest}) => {
    const classes = useStyles()
    const [values, setValues] = useState({
        firstName: 'Katarina',
        lastName: 'Smith',
        email: 'demo@devias.io',
        phone: '6598659865',
        place: 'IIIT Hyd,Gachibowli',
        city: 'Hyderabad',
        state: 'AndhraPradesh',
        country: 'India',
        prefferedLanguage: 'English',
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <form
            autoComplete="off"
            noValidate
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Card>
                <CardHeader subheader="The information can be edited" title="Profile"/>

                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value={values.firstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value={values.lastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                required
                                onChange={handleChange}
                                type="number"
                                value={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Place"
                                name="place"
                                onChange={handleChange}
                                value={values.place}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="City"
                                name="city"
                                onChange={handleChange}
                                value={values.city}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="State"
                                name="state"
                                onChange={handleChange}
                                value={values.state}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Country"
                                name="country"
                                onChange={handleChange}
                                value={values.country}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Preffered Language"
                                name="prefferedLanguage"
                                onChange={handleChange}
                                value={values.prefferedLanguage}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box display="flex" justifyContent="flex-end" p={2}>
                                <Button color="primary" variant="contained">
                                    Save details
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}

ProfileDetails.propTypes = {
    className: PropTypes.string,
}

export default ProfileDetails
