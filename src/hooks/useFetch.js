import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../constants/env";

//  El hook que usaremos para realizar las peticiones al backend y recoger todos los productos
const useFetch = (endPoint, headers = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  //  El loading siempre lo iniciamos en true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/${endPoint}`)
      .then((resp) => {
        setData(resp.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, error, loading}
};
export default useFetch;
