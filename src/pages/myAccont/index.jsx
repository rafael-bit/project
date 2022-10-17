import { GlobalStyle, Main } from '../../styles/pages/myAccont'
import Footer from '../../components/Footer/index'
import Header from '../../components/myAccont/Header/Index'

export default function myAccont() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
          <div class="title">
          <h1>Bem vindo user</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis obcaecati ducimus</p>
          </div>
          <section class="cards">
            <article class="card">
                <div class="miniatura">
                </div>
                <div class="card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc tellus, consectetur ut mi at, dapibus suscipit elit. Sed vitae dictum erat. Aliquam cursus enim varius aliquam euismod. .</p>
                </div>
            </article>
            <article class="card">
                <div class="miniatura">
                </div>
                <div class="card-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec leo vel elit consectetur placerat. Aenean tincidunt felis libero. Aenean egestas metus id risus finibus, vitae venenatis</p>
                </div>
            </article>
            <article class="card">
                <div class="miniatura">
                </div>
                <div class="card-content">
                    <p>Integer vitae consectetur est. Sed tincidunt, nisl sit amet tristique venenatis, eros felis interdum nisl, quis ultrices orci tortor nec </p>
                </div>
            </article>

            <article class="card">
                <div class="miniatura">
                </div>
                <div class="card-content">
                  <p>Mauris id auctor libero. Sed diam sapien, scelerisque nec consequat ut, lobortis eu metus. Sed varius purus ac sapien rutrum, id facilisis quam maximus. Aenean ac est hendrerit</p>
                </div>
            </article>
        </section>
      </Main>
      <Footer />
    </>
  )
}
