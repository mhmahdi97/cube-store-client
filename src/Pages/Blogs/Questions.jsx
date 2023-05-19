import React from 'react';

const Questions = (props) => {
    const {question, answer} = props.question;
    return (
        <div className='mt-6'>
            <div className='container mx-auto mb-6'>
                <h2 className='font-bold text-lg'>{question}</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Questions;