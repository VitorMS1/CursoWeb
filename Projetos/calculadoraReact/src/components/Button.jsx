import React from "react";
import './Button.css';

export default props => {
    let classesButton = 'button ';
    classesButton += props.operation ? 'operation' : '';
    classesButton += props.operationSecundary ? 'operationSecundary' : '';
    classesButton += props.double ? 'double' : '';

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classesButton}>
            {props.label}
        </button>);
};
