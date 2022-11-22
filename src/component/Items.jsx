import Nullstack from 'nullstack';
import "./Items.css";
import Item from "./Item";
const bdSimulado = [
  {
  titulo: "Mouse Razer Deathadder Essential",
  preco: 39,
  descricao: "kjnsdlkjnf"

  },
  {
    titulo: "Mouse Razer Deathadder ",
    preco: 344,
    descricao: "clorokina"
    }]

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
      
      <main class="conteudo">
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