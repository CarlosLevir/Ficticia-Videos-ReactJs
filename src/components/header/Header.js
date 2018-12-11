import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#a8385c',
      },
    },
    typography: { 
      useNextVariants: true
   }
  });

const styles = {
    siteName: {
        color: "#FFF"
    },
    headerToolbar: {
        justifyContent: "space-around",
    }
}

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="fixed">
                    <Toolbar style={styles.headerToolbar}>
                        <div>
                            <Typography variant="h6" style={styles.siteName}>
                                Ficitícia videos
                            </Typography>
                        </div>
                        <div style={styles.rightMenu}>
                            <IconButton color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Open drawer">
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );
    }
}

export default Header;