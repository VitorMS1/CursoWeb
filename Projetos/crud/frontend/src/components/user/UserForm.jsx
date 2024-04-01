import React, { Component } from "react";
import axios from 'axios';
// import UserList from "./UserList";

const initialState = {
    user: { name: '', email: '' },
    list: [],
    baseURL: 'http://localhost:3001/users'
};

class UserForm extends Component {
    state = { ...initialState };

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    createUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if (add) list.unshift(user);
        return list;
    }

    save() {
        const { user } = this.state;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${this.state.baseURL}/${user.id}` : this.state.baseURL;
        axios[method](url, user)
            .then(resp => {
                const list = this.createUpdatedList(resp.data);
                this.setState({ user: initialState.user, list });

            })
            .then(resp => {
                const { updateList } = this.props;
                updateList();
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
            });
    }

    clearInput() {
        this.setState({ user: initialState.user });
    }


    renderForm(flag) {
        if (flag) {
            return (
                <React.Fragment>
                    <h2>Cadastre seu usuário</h2>
                    <hr />
                    <div className="form">
                        <div className="row">
                            <div className="col-12 col-lg-2 mb-4 mb-lg-0">
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input type="text" className="form-control bg-light-subtle"
                                        name="name"
                                        value={this.state.user.name}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Informe o seu nome" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 mb-4 mb-lg-0">
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="text" className="form-control"
                                        name="email"
                                        value={this.state.user.email}
                                        onChange={e => this.updateField(e)}
                                        placeholder="Informe o seu e-mail" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col12 d-flex justify-content-end">
                                <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                                <button className="btn btn-primary ms-4" onClick={e => this.clearInput(e)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <h1>Criado</h1>
                </React.Fragment>
            )
        }
    }

    render() {
        const { updateList } = this.props;
        return (
            <div className="p-3 card-User">
                {this.renderForm(true)}
            </div>
        );
    }
}

export default UserForm;
