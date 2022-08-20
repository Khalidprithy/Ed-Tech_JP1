import React from 'react';
import { Spinner }
    from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css'


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Spinner text={"Loading"} bgColor={"#00adff"} width={"-6px"} height={"-6px"} />
        </div>

    );
};

export default Loading;