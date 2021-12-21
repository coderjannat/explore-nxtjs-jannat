import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black', marginBottom: 10 }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Besnik
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem style={{ display: 'flow-root' }}>
                                <Typography textAlign="center"><Link href="/"><a>Home</a></Link></Typography><br />
                                <Typography textAlign="center"><Link href="/about"><a>About</a></Link></Typography><br />
                                <Typography textAlign="center"><Link href="/explore"><a>Explore</a></Link></Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Besnik
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', ml: 8 } }}>

                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link href="/"><a>Home</a></Link>
                        </Button>
                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link href="/about"><a>About</a></Link>
                        </Button>
                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link href="/explore"><a>Explore</a></Link>
                        </Button>
                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link href="/"><a>Home</a></Link>
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', ml: 8 } ,flexDirection: 'row-reverse'}}>

                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link href="/"><a>Login</a></Link>
                        </Button>
                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link href="/about"><a>Sign Up</a></Link>
                        </Button>
                        

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;

// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//     return (
//         <nav>
//             <div className="logo">
//                 <p><strong>basnik</strong></p>
//             </div>
//             <Link href="/"><a>Home</a></Link>
//             <Link href="/about"><a>About</a></Link>
//             <Link href="/explore"><a>Explore</a></Link>
//         </nav>
//     );
// };

// export default Navbar;