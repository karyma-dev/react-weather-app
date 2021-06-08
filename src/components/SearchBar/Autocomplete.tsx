import React, { FC, Dispatch, SetStateAction } from 'react'
import Downshift from 'downshift'
import csc from 'country-state-city'

const Autocomplete: FC<Prop> = ({ country, setCity }) => {
    const data = csc.getCitiesOfCountry(country).map((city) => city.name)
    const cities = data.reduce((uniq: any[], item: string) => (uniq.includes(item) ? uniq : [...uniq, item]), [])

    const onChange = (city: string | null) => {
        if (typeof city === 'string') {
            setCity(city)
        }
    }

    const capitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <Downshift onChange={onChange}>
            {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, highlightedIndex, selectedItem }) => (
                <div>
                    <input {...getInputProps()} placeholder="Enter a city" />
                    <ul {...getMenuProps()}>
                        {isOpen
                            ? cities
                                  .filter((item) => !inputValue || item.includes(capitalize(inputValue)))
                                  .map((item, index) => (
                                      <li
                                          {...getItemProps({
                                              key: item,
                                              index,
                                              item,
                                              style: {
                                                  backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                                                  fontWeight: selectedItem === item ? 'bold' : 'normal',
                                              },
                                          })}
                                      >
                                          {item}
                                      </li>
                                  ))
                            : null}
                    </ul>
                </div>
            )}
        </Downshift>
    )
}

type Prop = {
    country: string
    setCity: Dispatch<SetStateAction<string>>
}

export default Autocomplete
