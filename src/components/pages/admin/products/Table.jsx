import useFetch from "../../hooks/useFetch";

const Table = () => {
  const { data, error, loading } = useFetch("public/products");

  if (loading) return <h1> CARGANDO ...</h1>;
  if (error) return <h1>ERROR AL CARGAR PRODUCTOS</h1>

  return (
    <div>
      <h1>Productos</h1>
      {data.map((prod) => (
        <div>{JSON.stringify(prod)}</div>
      ))}
    </div>
  );
};

export default Table;
