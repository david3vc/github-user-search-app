import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import useGetUser from "./useGetUser";
import "../styles/search.css";
import iconoLupa from "../assets/icon-search.svg";

const Search = ({ setData }) => {
  const [ocultarEstado, setOcultarEstado] = useState(false);
  const formik = useFormik({
    initialValues: {
      search: "",
      error: "No results"
    },
    onSubmit: (values) => handleSave(values),
  });

  const { data, getUser, isSuccess, isError } = useGetUser();

  useEffect(() => {
    if (isSuccess === true) {
      console.log(data);
      setData(data)
    }
  }, [isSuccess]);

  const handleSave = (values) => {
    getUser(values.search);
  };

  const ocultar = () => {
    setOcultarEstado(true);
    formik.setFieldValue('search', '');
  }

  useEffect(()=>{
    if(isError === true){
      setOcultarEstado(false);
    }
  },[isError]);

  return (
    <div className="search-contenedor d-flex justify-content-between">
      <div className="search-contenedor__lupa">
        <img src={iconoLupa} />
      </div>
      <div className="search-contenedor__input movil mt-1">
        {
          isError === true && ocultarEstado === false ? <span onClick={ocultar}>{formik.values.error}</span> : (  
            <input 
              type="text"
              name="search"
              placeholder='Search GitHub username...'
              className="input__sin-border"
              value={formik.values.search}
              onChange={formik.handleChange}
            />
          )
        }
      </div>
      <div className="search-contenedor__input-desktop mt-1">
        <input 
          type="text"
          name="search"
          placeholder='Search GitHub username'
          className="input__sin-border"
          value={formik.values.search}
          onChange={formik.handleChange}
        />
        {
          isError === true && <span>{formik.values.error}</span>
        }
      </div> 
      <div className="search-contenedor__boton">
        <Button
          variant="primary"
          size="md"
          className="border-0"
          onClick={formik.handleSubmit}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
