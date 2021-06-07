import React, { FC } from 'react'
import Downshift from 'downshift'
import csc from 'country-state-city'

const Autocomplete: FC<Prop> = ({ country }) => {
    const cities = csc.getCitiesOfCountry(country).map((city) => city.name)

    return <Downshift></Downshift>
}

type Prop = {
    country: string
}

export default Autocomplete
