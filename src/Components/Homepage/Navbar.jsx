import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Explore from './Explore';
import LoginModal from './LoginModal';
import Sidebar from './Sidebar';
import Hidden from '@mui/material/Hidden';

const pages = [
  'Career Support',
  'Success Stories',
  'Study Abroad',
  'Enterprise',
  'For Recruiters',
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'More'];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#ff830e' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Hidden mdUp>
              <IconButton
                size="large"
                aria-label="open sidebar menu"
                color="inherit"
                onClick={handleOpenNavMenu}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              EduGaon
            </Typography>

            <Hidden mdUp>
              <Sidebar isOpen={Boolean(anchorElNav)} onClose={handleCloseNavMenu} />
            </Hidden>

            <Hidden smDown>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 1,
                    color: 'white',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    display: 'block',
                    flexGrow: 1,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Hidden>

            <Hidden mdDown>
              <Tooltip title={<Explore />}>
                <Button variant="outline-primary" style={{ color: 'white' }}>
                  Explore Program &#9662;
                </Button>
              </Tooltip>
            </Hidden>

            <Hidden mdDown>
              <Button sx={{ mr: 20, color: 'inherit', fontSize: '16px' }}>More &#9662;</Button>
            </Hidden>

            <Hidden mdUp>
              <LoginModal />
            </Hidden>

            <Hidden smDown>
              <Box sx={{ flexGrow: 1.5 }}>
                <Button color="inherit" onClick={(e) => setAnchorElUser(e.currentTarget)}>
                  User
                </Button>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
