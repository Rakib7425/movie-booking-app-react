import React from 'react'
import './LoaderCss.css'


const Loader = () => {
    return (

        <div className="mainLoader flex justify-center items-center min-h-screen">
            {/* <div className="loader">
                <div className="outer"></div>
                <div className="middle"></div>
                <div className="inner"></div>
            </div> */}
            <div className="spinner">
                <div className="spinnerin"></div>
            </div>
        </div>
    )
}

export default Loader