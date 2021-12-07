import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state = {
        isDark: false
    }
    
    // Registration mock up
    toggleTheme = () =>{
        this.setState({isAuthenticated: !this.state.isDark})
        if(this.state.isDark) alert("Now it's dark!");
        else alert("Now it's light!");
    } 
    
    render(){
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>        
        );
    }
}
export default ThemeContextProvider;