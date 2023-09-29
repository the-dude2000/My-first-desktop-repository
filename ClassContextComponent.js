import React, {Component} from 'react'
import { ThemeContext } from './useContext'

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return
    }


    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class 
                    Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}
// value darktheme function  returning single div here that gets some theme styles  and then has the word class theme inside of it that black rectangle  and when toggled becomes grey rectangle easily change our theme.