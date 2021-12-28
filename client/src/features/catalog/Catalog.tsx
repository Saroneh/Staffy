import { useEffect, useState } from "react";
import { Artifact } from "../../app/models/artifact";
import ArtifactList from "./ArtifactList";


export default function Catalog() {

    const [artifacts, setArtifact] = useState<Artifact[]>([]); // the interface model/artifact.ts describes what is expected of input to this object
    
    useEffect(() => {
    fetch('http://localhost:5001/api/Artifacts')
    .then(response => response.json())
    .then(data => setArtifact(data))
    },[] )

    return(
    <ArtifactList  artifacts={artifacts}/>
    )
}