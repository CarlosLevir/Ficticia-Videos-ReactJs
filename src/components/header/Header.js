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
import SearchPage from '../searchPage/SearchPage';
import logo from '../../imgs/logo.png';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

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
    },
    searchInput: {
        maxWidth: "80%",
        backgroundColor: "#922d4d",
        borderRadius: "5px",
        border:"1px solid white",
        padding: "10px",
        color: "white",
        outline: "none",
    },
    formSearch: {
        maxWidth: "25%",
    },
    rightMenu: {
        display: "flex",
        alignItems: "center",
        maxWidth: "50%",
    },
    logo: {
        width: 45,
        height: 30
    },
    logoInfo: {
        display: "flex",
        alignItems: "center"
    }
}

class Header extends Component {

    state = {
        anchorEl: null,
        value: 1,
        keyword: null,
        videosDataSearch: null
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

      handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            keyword: e.target.keyword.value
        },
        () => {
            YoutubeService.getSearchedVideos(this.state.keyword).then((response) => {
                this.setState({
                    videosDataSearch: response.data.items,
                    value: 3,
                })
            })
        });
      };

    render() {
        const { anchorEl } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar style={styles.headerToolbar}>
                        <div style={styles.logoInfo}>
                            <img src={logo} alt="Logo" style={styles.logo} />
                            <Typography variant="h6" style={styles.siteName}>
                                Fictícia videos
                            </Typography>
                        </div>
                        <div style={styles.rightMenu}>
                            <form style={styles.formSearch} onSubmit={this.handleSearch}>
                                <input
                                name="keyword"
                                placeholder="Buscar"
                                style={styles.searchInput}
                                />
                            </form>
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
                {this.state.value === 3 && <SearchPage keyword={this.state.keyword} videosDataSearch={this.state.videosDataSearch} />}
            </MuiThemeProvider>
        );
    }
}

export default Header;