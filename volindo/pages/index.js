import Image from "next/image";
import styles from "../styles/Home.module.css";
function Home({ data }) {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <section
        className={`vh-100 ${styles.opciones3}`}
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container-fluid  vh-100">
          <div className="row  h-100 justify-content-left d-flex ">
            <div className="col-md-4 col-xl-4 p-0">
              <div
                className={`align-self-center ${styles.contenedorizquierdo}`}
              >
                <div className={`  ${styles.tarjetausuario}`}>
                  <div className="text-center">
                    <div className="pb-3">
                      <Image
                        src="/iconousuario.svg"
                        className={`img-fluid ${styles.iconousuario}`}
                        width={130}
                        height={130}
                        alt="volindo"
                        layout="responsive "
                      />
                    </div>
                    <div className="mb-4 pb-5 ">
                      <span className={`text-white ${styles.fuentenunito} ${styles.settings}`}>
                        <Image
                          src="/cog.svg"
                          className={`img-fluid ${styles.iconoengrane}`}
                          width={24}
                          height={24}
                          alt="volindo"
                          layout="responsive "
                        />
                        Settings
                      </span>
                    </div>
                    <div className="mb-4 pb-4 ">
                      <h4
                        className={`mb-2 text-white ${styles.welcome} ${styles.fuentemonserrat}`}
                      >
                        Welcome
                      </h4>
                    </div>

                    <div className="mb-4 pb-2">
                      <span className={`text-white ${styles.fuentenunito}`}>
                        <Image
                          src="/idioma.svg"
                          className={`img-fluid ${styles.iconoplaneta}`}
                          width={18}
                          height={18}
                          alt="volindo"
                          layout="responsive "
                        />
                        <span className={styles.colormarron}>EN</span> / ES
                      </span>
                    </div>

                    <div className="mb-4 ">
                      <button
                        type="button"
                        className={`btn btn-outline-light rounded-pill fw-semibold px-4 ${styles.fuentemonserrat}`}
                      >
                        SIGN OUT
                      </button>
                    </div>

                    <div className=" mt-5 mb-2 pb-5">
                      <span
                        className={`text-white fs-4 ${styles.fuentenunito}`}
                      >
                        18:13
                      </span>
                      <br></br>
                      <span className={`text-white ${styles.fuentenunito}`}>
                        Jueves, 28 Octubre
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div   className={`col-md-8 col-xl-8  mx-auto ${styles.opciones}`}>
              <div className={`contenedor ${styles.opciones2}`}>
                <div  className={`mb-4 pb-2 ${styles.fuentemonserrat} ${styles.logo}`}>Logo</div>
                <div className="row">
                    <div className="d-flex justify-content-center">
                  <div className="col-md-3   p-0 m-0 ">
                    <div className={`p-3 ${styles.cuadroblanco}`}>
                      <div>
                        <Image
                          src="/icono.svg"
                          className={`img-fluid ${styles.iconopciones}`}
                          width={121}
                          height={121}
                          alt="volindo"
                          layout="responsive "
                        />
                      </div>
                      <div><span
                        className={` ${styles.fuentemonserrat} ${styles.opciontxt}`}>
                      Point 1</span></div>
                    </div>
                  </div>
                  <div className="col-md-3  p-0 m-0 ">
                    <div className={`p-3 ${styles.cuadroblanco}`}>
                      <div>
                        <Image
                          src="/icono.svg"
                          className={`img-fluid ${styles.iconopciones}`}
                          width={121}
                          height={121}
                          alt="volindo"
                          layout="responsive "
                        />
                      </div>
                      <div><span
                        className={` ${styles.fuentemonserrat} ${styles.opciontxt}`}
                      >Point 2</span></div>
                    </div>
                  </div>
                  <div className="col-md-3   p-0 m-0 ">
                    <div className={`p-3 ${styles.cuadroblanco}`}>
                      <div>
                        <Image
                          src="/icono.svg"
                          className={`img-fluid ${styles.iconopciones}`}
                          width={121}
                          height={121}
                          alt="volindo"
                          layout="responsive "
                        />
                      </div>
                      <div><span
                        className={` ${styles.fuentemonserrat} ${styles.opciontxt}`}>
                      Point 3</span></div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="row pt-5">
                <div className="d-flex justify-content-center">
                  <div className="col-md-3 p-0 m-0 ">
                    <div className={`p-3 ${styles.cuadroblanco}`}>
                      <div>
                        <Image
                          src="/icono.svg"
                          className={`img-fluid ${styles.iconopciones}`}
                          width={121}
                          height={121}
                          alt="volindo"
                          layout="responsive "
                        />
                      </div>
                      <div><span
                        className={` ${styles.fuentemonserrat} ${styles.opciontxt}`}>Point 4 </span></div>
                    </div>
                  </div>
                  <div className="col-md-3  p-0 m-0 ">
                    <div className={`p-3 ${styles.cuadroblanco}`}>
                      <div>
                        <Image
                          src="/icono.svg"
                          className={`img-fluid ${styles.iconopciones}`}
                          width={121}
                          height={121}
                          alt="volindo"
                          layout="responsive "
                        />
                      </div>
                      <div><span
                        className={` ${styles.fuentemonserrat} ${styles.opciontxt}`}>Point 5</span></div>
                    </div>
                  </div>
                  <div className="col-md-3 p-0 m-0  ">
                    <div className={`p-3 ${styles.cuadroblanco}`}>
                      <div>
                        <Image
                          src="/icono.svg"
                          className={`img-fluid ${styles.iconopciones}`}
                          width={121}
                          height={121}
                          alt="volindo"
                          layout="responsive "
                        />
                      </div>
                      <div><span
                        className={` ${styles.fuentemonserrat} ${styles.opciontxt}`}>:Point 6</span></div>
                    </div>
                  </div>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default Home;
