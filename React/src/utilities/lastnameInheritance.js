import React from "react";

export default function childrenWithProps(props) {
    return React.Children.map(props.children, child =>
        React.cloneElement(child, { ...child.props, sobrenome: props.sobrenome })
    )
};