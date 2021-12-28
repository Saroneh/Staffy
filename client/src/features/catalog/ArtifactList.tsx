
import { Grid } from "@mui/material";
import { Artifact } from "../../app/models/artifact";
import ArtifactCard from "./ArtifactCard";

interface Props{
    artifacts: Artifact[];
}

export default function ArtifactList({artifacts}: Props){
   return(
   <Grid container spacing={4} >
       {artifacts.map(artifacts => (
           <Grid item xs={4} key={artifacts.id}>
              <ArtifactCard artifacts={artifacts} key={artifacts.id}/>
           </Grid>
     
       ))}
    </Grid>
   )

}