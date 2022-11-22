import Nullstack from 'nullstack';
import './Application.css';
import Home from './Home';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          // href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          // rel="stylesheet" />

            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"/>
        <script src="https://unpkg.com/phosphor-icons"></script>
      </head>
    )
  }

  render() {
    return (
      <body>
        <Head />
        <Home route="/" greeting="Bem vindo aos meus links!" />
      </body>
    )
  }

}

export default Application;