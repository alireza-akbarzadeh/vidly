import React from 'react';

const Movie = (Component) => {
    return function HOC() {
        return (
            <div>
                <div className={"HOC"}>
                    Hoc
                </div>
                <Component/>
            </div>
        )
    }
};
export default Movie;
