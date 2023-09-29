import React, { useContext } from 'react'
import { ThemeContext } from './useContext'

export default function FunctionContentComponent() {
    const darkTheme = useContext(ThemeContext) // so we pass in our context to this use context  and its going to give us the value from that context in ou case darkTheme can use inside of any code u want.
    const themeStyles =  {
        backgroundColor: dark ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
}
    return(
        <div style={themeStyles}>Function Theme</div> // can set the styles like themeStyles in the divs keep in mind in case im stuck. use context simplifies code
    )
}

// useContext hook just pass it in a context like at top themeContext its going to give u the value of that context do like in line 5 and do whatever to it.