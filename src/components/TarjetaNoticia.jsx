function TarjetaNoticia({ info }) {
  return (
    <div className="card">
      <h2>{info.title}</h2>
      <p>{info.body}</p>
      <button>Leer más</button>
    </div>
  );
}

export default TarjetaNoticia;