import React from 'react';
import { NavLink, useRouteError } from "react-router-dom";
import img from "/src/assets/404.gif"

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='text-center'>
            <div id="error-page" className="mt-10">
                <img className=" mx-auto mb-5 rounded-lg" src={img} alt="" />
                <div className=" pb-5">
                    <h1 className="text-4xl">Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
                <NavLink to="/"><button className="btn btn-warning normal-case text-base mb-10">Back To Homepage</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;