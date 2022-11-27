import Nullstack from 'nullstack';
import "./Items.css";
import Item from "./Item";
const bdSimulado = [
  {
  titulo: "Mouse Razer Deathadder",
  preco: 39.99,
  descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum velit distinctio molestias accusantium reprehenderit cupiditate, error quia eligendi officia suscipit vitae facere similique dolorum itaque illo ea illum praesentium placeat."

  }, {
    titulo: "Mouse Razer Deathadder ",
    preco: 99.99,
    descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum velit distinctio molestias accusantium reprehenderit cupiditate, error quia eligendi officia suscipit vitae facere similique dolorum itaque illo ea illum praesentium placeat."
    },

   {
     titulo: "Mouse Razer Deathadder ",
     preco: 79.99,
     descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum velit distinctio molestias accusantium reprehenderit cupiditate, error quia eligendi officia suscipit vitae facere similique dolorum itaque illo ea illum praesentium placeat."
     }
]

class Items extends Nullstack {

  items = [];
  
  static async getItems() {
    return bdSimulado;
  }
  
  async hydrate() {
    // your code goes here
    this.items = await this.getItems();
  }
  
  render(items) {
    return (
      
      <main class="conteudo-items">
      <section class="grid">
      { this.items.map((item) => (
         <Item item={item}/> 
        ))}

      </section>
    </main>
    )
  }

}

export default Items;