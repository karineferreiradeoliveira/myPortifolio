import Nullstack from 'nullstack';
import "./Item.css";

class item extends Nullstack {
  
  render({item}) {
    return (
      <div class="item">
          <img src="/img/1.jpeg" alt="" />
          <h1 class="titulo">{item.titulo}</h1>
          <p class="preco">{item.preco}</p>
          <p class="descricao">
            {item.descricao}
          </p>
          <a class="btn" href="#">Comprar</a>
          <a class="btn" href="#">Adicionar aos Favoritos</a>
        </div>
    )
  }

}

export default item;