import Curso from "../components/curso";
import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/grid.module.css";
export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout
        title="Inicio"
        description="GuitarLA - Venta de guitarras y blog de musica"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
                <Curso curso={curso} />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const urlGuitarra = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [respuestaGuitarra, respuestaPost, respuestaCurso] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlPost),
    fetch(urlCurso),
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([
      respuestaGuitarra.json(),
      respuestaPost.json(),
      respuestaCurso.json(),
    ]);
  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
