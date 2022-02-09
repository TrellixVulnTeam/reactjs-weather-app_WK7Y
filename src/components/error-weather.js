import React from 'react';
import './current-weather.scss';

class ErrorWeather extends React.Component{

    render(){
        return(
            <div
                className="
                    absolute
                    text-sm text-left text-white
                    bg-red-500
                    h-12
                    flex
                    
                    items-center
                    p-4
                    rounded-md
                "
                role="alert"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-2 stroke-current"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                </svg>
                    Ocorreu um erro ao procurar a cidade.
                </div>
        );
    }


}


export default ErrorWeather;