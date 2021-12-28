import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Artifact } from "../../app/models/artifact";

interface Props{
    artifacts: Artifact;
}

export default function ArtifactCard({artifacts}:Props) {

    return(

        
        <Card>
            <CardHeader
            avatar ={
            <Avatar sx={{ bgcolor: red[500] }}>
                {artifacts.type.charAt(0).toUpperCase()}
            </Avatar>
            }
            title = {artifacts.name}
            subheader = {<Typography> Status: {artifacts.status}</Typography>}
            titleTypographyProps = {{sx: {fontWeight: 'bold'} }}
            />
            
            <CardMedia
                sx={{ height: 140 }}
                image={artifacts.pictureUrl}
    
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Deadline: {artifacts.deadline}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {artifacts.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Se mere</Button>
                <Button size="small">Tilføj favorit</Button>
            </CardActions>
            </Card>
        );
                    

    
    
}