import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";
export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(calcularTotal);
  }, [carrito]);

  return (
    <Layout title="Carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0 ? (
              <p>No hay articulos en el carrito</p>
            ) : (
              carrito.map((producto) => (
                <div className={styles.producto} key={producto.id}>
                  <div className={styles.imagen}>
                    <Image
                      src={producto.imagen}
                      width={250}
                      height={450}
                      alt={`${producto.nombre}`}
                    />
                  </div>
                  <div className={styles.detalle}>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad: </p>
                      <select
                        className={styles.select}
                        onChange={(e) =>
                          actualizarCantidad({
                            id: producto.id,
                            cantidad: e.target.value,
                          })
                        }
                        value={producto.cantidad}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $ <span>{producto.precio}</span>{" "}
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{producto.cantidad * producto.precio}</span>
                    </p>
                  </div>
                  <button
                    className={styles.eliminar}
                    onClick={() => eliminarProducto(producto.id)}
                    type="button"
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
          <aside className={styles.resumen}>
            <h2>Resumen del pedido</h2>
            <p>Total a pagar: $ {total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
