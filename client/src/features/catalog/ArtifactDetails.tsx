import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artifact } from "../../app/models/artifact";



export default function ArtifactDetails() 
{

    const [artifacts, setArtifact] = useState<Artifact | null>(); // the interface model/artifact.ts describes what is expected of input to this object
    const {id} =  useParams<{id: string}>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
    axios.get(`http://localhost:5001/api/Artifacts/${id}`)
    .then(response => setArtifact(response.data))
    .catch(error => console.log('error'))
    .finally(() => setLoading(false));


    },[id] )

    if (loading) return <h3> loading...</h3>
    if (!artifacts) return <h3> no product! </h3>

    return(
        <Typography variant='h6'>Product details for {artifacts?.name}</Typography>

      
    );

}