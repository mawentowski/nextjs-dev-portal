import React, { useState } from 'react';

export default function VersionSelector(props) {
    const [buttonStatus, setButtonStatus] = useState('collapsed');

    const clickHandler = () => {
        if (buttonStatus === 'expanded') {
            setButtonStatus('collapsed');
        } else {
            setButtonStatus('expanded');
        }

        // console.log('Clicked!');
    };

    return (
        <button onClick={clickHandler} className={props.className}>
            {props.chilrden}
            {buttonStatus}
        </button>
    );
}
