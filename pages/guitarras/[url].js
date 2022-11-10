import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/guitarras.module.css";

export default function Producto({ guitarra }) {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form>
            <label htmlFor="cantidad">
              Cantidad:
            </label>
            <select id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();
  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();
//   return {
//     props: {
//       guitarra,
//     },
//   };
// }
