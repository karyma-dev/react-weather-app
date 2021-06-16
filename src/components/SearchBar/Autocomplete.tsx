import React, { FC, Dispatch, SetStateAction } from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'
import csc from 'country-state-city'

const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    padding: 5px 0;
    font-size: 1rem;
`

const Menu = styled.ul`
    list-style: none;
    background-color: white;
    cursor: pointer;
    position: absolute;
    max-height: 200px;
    overflow-y: scroll;
    width: calc(100% + 20px);
`

const MenuItem = styled.li`
    padding: 5px 2px;
    &:hover {
        background-color: lightgray;
    }
`

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
                <div style={{ position: 'relative' }}>
                    <Input {...getInputProps()} placeholder="Enter a city" />
                    <Menu {...getMenuProps()}>
                        {isOpen
                            ? cities
                                  .filter((item) => !inputValue || item.includes(capitalize(inputValue)))
                                  .map((item, index) => (
                                      <MenuItem
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
                                      </MenuItem>
                                  ))
                            : null}
                    </Menu>
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
