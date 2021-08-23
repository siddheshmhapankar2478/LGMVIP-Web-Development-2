import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './Loader.css';
const Loading = () => {
    return (
        <>
            <div id="load" align='center'>
                <Loader
                    type="Puff"
                    color="rgb(64,148,252)"
                    height={100}
                    width={100}
                    timeout={5000} //5 secs
                />
            </div>
        </>
    )
}

export default Loading
