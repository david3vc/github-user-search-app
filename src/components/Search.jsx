import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
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
    <div className="search-contenedor d-flex justify-content-between">
      <div className="search-contenedor__lupa">
        <img src={iconoLupa} />
      </div>
      <div className="search-contenedor__input mt-1">
        <input 
          type="text"
          name="search"
          placeholder="Search GitHub username"
          className="input__sin-border"
          value={formik.values.search}
          onChange={formik.handleChange}
        />
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
