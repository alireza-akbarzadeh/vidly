import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const resent = () => setCount(0);

    return (
        <div className={"d-flex align-items-center justify-content-center flex-column mt-5"}>
            <button onClick={resent} className={"btn btn-lg btn-success"}>Reset</button>
            <div className={"d-flex justify-content-between  align-items-center mt-4 w-100"} style={{maxWidth: 350}}>
                <div style={{fontSize: 18}}
                     className={`badge ${count === 0 ? "bg-info" : "bg-primary"} mt-2 display-4 h-4`}>

                    {count === 0 ? "zero" : count}
                </div>
                <div className={""}>
                    <button onClick={() => increment()}
                            className={"btn btn-secondary btn-sm m-3"}>+
                    </button>
                    <button onClick={() => decrement()} disabled={count === 0}
                            className={"btn btn-danger btn-sm"}>-
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;