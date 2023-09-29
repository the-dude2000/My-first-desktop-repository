import react, {useContext, useState } from 'react' // make sure to do this
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()
export function ThemeProvider({ children }) { // this will allow to take provider stuff in other file /// take over role and put other code in the provider /////
  const [darkTheme, setDarkTheme] = useState(true)   // ThemeProvider here thats created it going to take in the children zso we can wrap it around anything and its going to 
  // give us access to both our theme as well as the function in order to update our theme and then its just going to render out the children

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme) // between enabled and disabled
  }
  return (
    <ThemeContext.Provider value ={darkTheme}> 
    <ThemeUpdateContext.Provider value={toggleTheme}>
    {children}
    </ThemeUpdateContext.Provider>     
    </ThemeContext.Provider>
  )
} // can return from other files ///  have theme context provider here and we are passing in the value of darkTheme and then rendering the children and all of info  for context is all inside this one single component