import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ConceptPage() {
    const { title } = useParams();
    const [concept, setConcept] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/concepts/${title}`)
            .then(response => setConcept(response.data))
            .catch(error => console.log(error));
    }, [title]);

    return concept ? (
        <div>
            <h1>{concept.title}</h1>
            <p>{concept.explanation}</p>
            <img src={concept.imageUrl} alt={concept.title} />
            <pre>{concept.codeSnippet}</pre>
        </div>
    ) : <p>Loading...</p>;
}

export default ConceptPage;
