import React, { useEffect, useState } from 'react';
import Questions from './Questions';

const Blogs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        fetch('questions.json')
        .then(res => res.json())
        .then (data => setQuestions(data))
    }, [])

    return (
        <div>
             {
                questions.map(question => <Questions
                question = {question}
                key={question.id}
                ></Questions>)
            }
        </div>
    );
};

export default Blogs;