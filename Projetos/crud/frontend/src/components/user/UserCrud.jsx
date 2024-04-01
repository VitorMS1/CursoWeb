import React, { Component } from "react";
import Main from "../templates/Main";
import UserForm from "./UserForm";
import UserList from "./UserList";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: "Cadastro de usuários simples com CRUD"
};

class UserCrud extends Component {
    constructor(props) {
        super(props);
        this.userListRef = React.createRef();
    }

    updateList = () => {
        this.userListRef.current.fetchData();
    };

    render() {
        return (
            <Main {...headerProps}>
                <UserForm updateList={this.updateList} />
                <UserList ref={this.userListRef} />
            </Main>
        );
    }
}

export default UserCrud;
