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
import MainPage from '../mainPage/MainPage';
import ChannelVideosPage from '../channelVideosPage/ChannelVideosPage';

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
        color: "#a8385c",
        marginRight: 5,
    }
}

class Header extends Component {

    state = {
        anchorEl: null,
        value: 2,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      handlePage = (e) => {
          this.setState({
              value: e.target.value
          }, this.handleClose())
      }

    render() {
        const { anchorEl } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
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
                        <MenuItem value={1} onClick={this.handlePage}>
                            <StarBorder style={styles.iconsOfMenu} />
                            Destaques
                        </MenuItem>
                        <MenuItem value={2} onClick={this.handlePage}>
                            <PlayCircleOutline style={styles.iconsOfMenu} />
                            Vídeos
                        </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                {this.state.value === 1 && <MainPage />}
                {this.state.value === 2 && <ChannelVideosPage />}
            </MuiThemeProvider>
        );
    }
}

export default Header;