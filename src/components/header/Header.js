import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import StarBorder from '@material-ui/icons/StarBorder';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#a8385c",
      },
    },
    typography: { 
      useNextVariants: true
   }
  });

const styles = {
    siteName: {
        color: "#FFF",
        fontFamily: "Titillium Web",
        fontWeight: "bold"
    },
    headerToolbar: {
        justifyContent: "space-around",
    },
    iconsOfMenu: {
        fontWeight: "bold",
    }
}

class Header extends Component {

    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render() {
        const { anchorEl } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="fixed">
                    <Toolbar style={styles.headerToolbar}>
                        <div>
                            <Typography variant="h6" style={styles.siteName}>
                                Fictícia videos
                            </Typography>
                        </div>
                        <div style={styles.rightMenu}>
                            <IconButton color="inherit">
                                <SearchIcon />
                            </IconButton>
                            Menu
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}>
                                <MenuIcon/>
                            </IconButton>
                        </div>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                        <MenuItem onClick={this.handleClose}>
                            <StarBorder />
                            Destaques
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <PlayCircleOutline />
                            Vídeos
                        </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );
    }
}

export default Header;