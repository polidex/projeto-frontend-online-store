import React from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutProducts extends React.Component {
  state = {
    fullname: '',
    email: '',
    cpf: '',
    tel: '',
    cep: '',
    address: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { fullname, email, cpf, tel, cep, address } = this.state;
    return (
      <div>
        <nav>
          <div>
            <Link to="/">
              Voltar a tela inicial
            </Link>
          </div>
        </nav>
        <div className="review_your_products">
          <p>Revise seus produtos</p>
        </div>
        <div className="buyer_info">
          <form>
            <input
              type="text"
              value={ fullname }
              onChange={ this.handleChange }
              name="fullname"
              id="fullname"
              placeholder="Nome
              Completo"
              data-testid="checkout-fullname"
            />
            <input
              type="email"
              value={ email }
              onChange={ this.handleChange }
              name="email"
              id="email"
              placeholder="E-mail"
              data-testid="checkout-email"
            />
            <input
              type="text"
              value={ cpf }
              onChange={ this.handleChange }
              name="cpf"
              id="cpf"
              placeholder="CPF: 123.456.789-00"
              data-testid="checkout-cpf"
            />
            <input
              type="text"
              value={ tel }
              onChange={ this.handleChange }
              name="tel"
              id="tel"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
            <input
              type="text"
              value={ cep }
              onChange={ this.handleChange }
              name="cep"
              id="cep"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              value={ address }
              onChange={ this.handleChange }
              name="address"
              id="address"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
          </form>
        </div>
      </div>
    );
  }
}
