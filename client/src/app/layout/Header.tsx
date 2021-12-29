import { AppBar, Badge, IconButton, Link, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
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


export default function Header({darkMode, handleChange} :Props) {
    return(
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant='h3'>
                Staffy
            </Typography>
            <Switch checked={darkMode} onChange={handleChange} color="default"/>

            <List sx ={{display: 'flex', flexDirection: 'row'}}>
                
                    {midNav.map((midNav) =>(
                        <ListItem 
                        component={NavLink}
                        to = {midNav.path}
                        key={midNav.path}
                        sx ={{color : 'inherit'}}>
                        {midNav.title}
                        </ListItem>
                    ))}  
            </List>

            <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>

        </Toolbar>
    </AppBar>
    )
}