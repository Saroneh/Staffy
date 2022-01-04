import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

 
interface Props{
    darkMode: boolean;
    handleChange: () => void;
}

const midNav = 
[
    {title: 'To Do', path: '/todo/'},
    {title: 'Guides', path: '/guides/'},
    {title: 'Catalog', path: '/catalog/'},
    {title: 'About', path: '/about/'},
]

const navStyle = {
color : 'inherit',
typography: 'h6',
display: 'flex',
textDecoration: 'none',
'&:hover': { color: 'secondary.main'},
'&.active': { color: 'text.secondary' },
}



export default function Header({darkMode, handleChange} :Props) {
    return(
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant='h3'>
                Staffy
            </Typography>

            <Box sx={{display:'flex', alignItems:'center'}}>
            <Switch checked={darkMode} onChange={handleChange} color="default"/>

            <List sx ={{display:'flex'}}>
                    {midNav.map(({title, path}) =>(
                        <ListItem
                        component={NavLink}
                        to = {path}
                        key={path}
                        sx ={navStyle}>
                        {title}
                        </ListItem>
                    ))}  
            </List>
            </Box>                

            <Box>
            <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
    )
}