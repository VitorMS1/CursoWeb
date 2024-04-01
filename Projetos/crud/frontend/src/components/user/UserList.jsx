import React, { Component } from "react";
import axios from 'axios';
import './UserList.css';

const initialState = {
    user: { name: '', email: '' },
    list: [],
    baseURL: 'http://localhost:3001/users',
    editingId: null
};

class UserList extends Component {

    state = { ...initialState };

    fetchData() {
        axios(this.state.baseURL)
            .then(resp => {
                this.setState({ list: resp.data });
            })
    }

    componentDidMount() { this.fetchData(); };

    createUpdatedList(user, add = true) {
        if (add) {
            const position = this.state.list.findIndex(listElement => listElement.id === user.id)
            const list = this.state.list.splice(position, 0, user);
            return list;
        }
        else {
            const list = this.state.list.filter(u => u.id !== user.id);
            return list;
        }
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    save() {
        const { user } = this.state;
        const url = `${this.state.baseURL}/${user.id}`;
        axios.put(url, user)
            .then(resp => {
                const list = this.createUpdatedList(resp.data);
                this.setState({ user: initialState.user, list, editingId: null });
                this.fetchData();
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
            });
    }

    load(user) {
        this.setState({ user, editingId: user.id });
    }

    remove(user) {
        axios.delete(`${this.state.baseURL}/${user.id}`)
            .then(resp => {
                const list = this.createUpdatedList(user, false);
                this.setState({ list })
            })
    }

    renderTable() {
        return (
            <div class="scroll-table">
                <table className="table table-dark mt-2 table-hover" id="table">
                    <thead>
                        <tr className="container">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="container col-12">
                        {this.renderRows(this.state.editingId)}
                    </tbody>
                </table>
            </div>

        )
    };

    renderRows() {
        return this.state.list.map(user => {
            if (user.id === this.state.editingId) {
                return (
                    <tr key={user.id}>
                        <td className="col-3">{user.id}</td>
                        <td className="col-3">
                            <input type="text" value={this.state.user.name} name="name" onChange={e => this.updateField(e)} />
                        </td>
                        <td className="col-3">
                            <input type="text" value={this.state.user.email} name="email" onChange={e => this.updateField(e)} />
                        </td>
                        <td className="col-5 col-md-3 text-center">
                            <button className="btn btn-warning mx-3" onClick={() => this.save(user)}>
                                <i className="fa fa-floppy-o"></i>
                            </button>
                            <button className="btn btn-danger" onClick={() => this.load({...initialState})}>
                                <i className="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                )
            }
            else {
                return (
                    <tr key={user.id}>
                        <td className="col-3">{user.id}</td>
                        <td className="col-3">{user.name}</td>
                        <td className="col-3">{user.email}</td>
                        <td className="col-5 col-md-3 text-center">
                            <button className="btn btn-warning mx-3" onClick={() => this.load(user)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger" onClick={() => this.remove(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                        <td></td>
                    </tr>
                )
            }
        })
    }

    renderList() {
        return (
            <div className="p-3 card-User mt-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Lista de usuários</h2>
                    <button className="btn btn-link d-flex align-items-center" onClick={e => this.fetchData()}>
                        <i className="fa fa-refresh"></i>
                    </button>
                </div>
                <hr />
                {this.renderTable()}
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        )
    }
}

export default UserList;

// export const fetchUserData = () => {
//     const userList = new UserList();
//     userList.fetchData();
// };