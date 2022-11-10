import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";
export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre Nosotros - Venta de guitarras y blog de musica"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className="">
          <div className={styles.contenido}>
            <Image
              alt="Imagen sobre nosotros"
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis aspernatur, sapiente praesentium totam id recusandae
                quasi eligendi eius tempora animi beatae unde ipsam adipisci,
                dolor laborum inventore quo assumenda similique. Accusamus
                dolorum sint quaerat corrupti optio, officiis aspernatur
                voluptatem consequuntur! Quae adipisci a, quaerat atque rerum
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis aspernatur, sapiente praesentium totam id recusandae
                quasi eligendi eius tempora animi beatae unde ipsam adipisci,
                dolor laborum inventore quo assumenda similique. Accusamus
                dolorum sint quaerat corrupti optio, officiis aspernatur
                voluptatem consequuntur! Quae adipisci a, quaerat atque rerum
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
