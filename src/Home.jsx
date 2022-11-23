import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
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
      <section class="main">
        <article>
          <h1 class="titulo-portifolio"> {project.name} </h1>
          <p> {greeting} </p>
         
          <ul class="redes">
            <li class="icon-rede">
              <Link href="https://github.com/karineferreiradeoliveira">
              <i class="ph-github-logo"></i> 
              </Link>
            </li>

            <li class="icon-rede">
              <Link href="https://www.linkedin.com/in/karinedeoliveira/">
              <i class="ph-linkedin-logo"></i> 
              </Link>
            </li>
            
            <li class="icon-rede">
              <Link href="https://www.twitch.tv/devkarine">
              <i class="ph-twitch-logo"></i> 
              </Link>
            </li>
            <li class="icon-rede">
              <Link href="https://twitter.com/realkarine">
              <i class="ph-twitter-logo"></i> 
              </Link>
            </li>
          </ul>
          
          
        </article>
        <aside>
          <Link href="https://nullstack.app/pt-br/waifu">
            {/* {<img src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" /> } */}
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home;