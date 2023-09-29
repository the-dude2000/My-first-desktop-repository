/*
When using Context broken up into two different sections, Context.Provider which is what u want to wrap all of the code that needs access to 
the information  in the context and it has single prop called value
Important thing about context is everything in provider have access to value in this value prop of our theme context provider
context is for passing down props essentially down into any of the children without manually passing darktheme stuff into props of each component global kinda for children of provider

You can combine reducers and context together to manage state of a complex screen.
be careful of curly braces when pasting
<MyContext.Consumer>
  {value => /* render something based on the context value } // 
  </MyContext.Consumer>
  A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
  
  Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().



*/

import React, { useState } from 'react' // {} import hooks like this like {useContext}
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './themeContext'

// Other imports i dont have

export const ThemeContext = React.createContext()

export default function App() {
    return (
        <>
        <ThemeProvider> 
            <button onClick={toggleTheme}>Toggle Theme</button> 
             <FunctionContextComponent />
             <ClassContextComponent />
            </ThemeProvider>
            </> // other stuff here like FunctionContentComponent and ClassContextComponent files stuff ///// toggles between light and dark
    )
}

// .consumer a thing     // gives ability to update theme here maybe around provider section
// stuff here now gone 