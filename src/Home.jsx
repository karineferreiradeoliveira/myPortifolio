import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import Counter from './Counter';
import './Home.css';

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`;
    page.description = `${project.name} foi feito com Nullstack`;
  }

  renderLink({ children, href }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/pt-br">
            <Logo height={60} light />
          </Link>
          <h1> {project.name} </h1>
          <p> {greeting} </p>
         
          <ul>
            <li>
              <Link href="https://github.com/karineferreiradeoliveira">
                🎉 Meu Github 
              </Link>
            </li>

            <li>
              <Link href="https://github.com/karineferreiradeoliveira">
                🎉 Meu Github 
              </Link>
            </li>
            
          </ul>
          
          
        </article>
        <aside>
          <Link href="https://nullstack.app/pt-br/waifu">
            <img src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home;