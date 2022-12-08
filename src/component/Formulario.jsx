import Nullstack from "nullstack";

class formulario extends Nullstack {
  async initiate() {
    // your code goes here
  }

  render({ dica }) {
    return (
      <>
        <main class="content-main">
          <div class="titulo-form"> formulario </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem,
            assumenda quae similique error illum necessitatibus minima suscipit
            quisquam numquam saepe eos id dignissimos hic. Similique adipisci
            quia inventore a e agora? <b>{dica}</b>{" "}
          </p>
        </main>
      </>
    );
  }
}

export default formulario;
