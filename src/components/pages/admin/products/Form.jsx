import { API_URL } from "../../../../constants/env";

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
      },
    };

    axios
      .post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        alert("Producto Creado");
      })
      .catch((err) => {
        console.log(err);
        alert("Error al crear el producto");
      });
  };
  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Nombre del Producto"
          required
        />
        <input type="text" name="price" placeholder="Precio" required />
        <input type="url" name="image" required />
        <textarea name="description" rows="10" required />
        <input type="text" name="color" placeholder="Color" required />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default Form;
