import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import useGetUser from "./useGetUser";
import "../styles/search.css";
import iconoLupa from "../assets/icon-search.svg";

const Search = ({ setData }) => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => handleSave(values),
  });

  const { data, getUser } = useGetUser();

  useEffect(() => {
    if (data) {
      console.log(data);
      setData(data)
    }
  }, [data]);

  const handleSave = (values) => {
    getUser(values.search);
  };

  return (
    <div className="search-contenedor">
      <div className="search-contenedor__lupa">
        <img src={iconoLupa} />
      </div>
      <div className="search-contenedor__input">
        <Form.Control
          size="sm"
          type="text"
          name="search"
          placeholder='Search GitHub username'
          className='input__sin-border'
          value={formik.values.search}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="search-contenedor__boton">
        <Button
          variant="primary"
          size="sm"
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
