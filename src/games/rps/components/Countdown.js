import React from 'react';

function Countdown () {
    const [seconds, setSeconds] = React.useState(3);

    React.useEffect(() => {
        //Countdown from 3 and when it hits 0 it prints string
        if(seconds> 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('ROCK PAPER SCISSORS SHOOT')
        }
    });

        return (
            <div>
                {seconds}
            </div>
        );
    }


export default Countdown;