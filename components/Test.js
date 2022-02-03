import React from 'react';
import styled from '@emotion/styled';

const Test = () => {
    return <TestSytled>
        heading
    </TestSytled>;
};



const TestSytled = styled.div`
width: 100%;
height: 500px;
margin: 0 auto;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
`

export default Test;
