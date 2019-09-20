import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <ProductList>
      {arr.map(() => (
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-2-masculino/87/D16-2953-187/D16-2953-187_detalhe1.jpg"
            alt="Tênis"
          />
          <strong>Tênis naice</strong>
          <span>R$66,66</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
