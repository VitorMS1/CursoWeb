import './Main.css';
import React from "react";
import Header from "./Header";

export default props =>
    <React.Fragment>
        <main className="content container-fluid p-0">
            <Header {...props} />
            <div className="mt-2 p-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
