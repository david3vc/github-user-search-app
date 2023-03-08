import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import { TEMA_DARK, TEMA_LIGHT } from "../constants";
import useGetUser from "./useGetUser";
import "../styles/search.css";
import iconoLupa from "../assets/icon-search.svg";

const Search = ({ setData, tema }) => {
    const [ocultarEstado, setOcultarEstado] = useState(false);
    const [windowDimesion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });

    const formik = useFormik({
        initialValues: {
            search: "",
            error: "No results",
        },
        onSubmit: (values) => handleSave(values),
    });

    const { data, getUser, isSuccess, isError } = useGetUser();

    useEffect(() => {
        if (isSuccess === true) {
            console.log(data);
            setData(data);
        }
    }, [isSuccess]);

    useEffect(() => {
        getUser("octocat");
    }, []);

    const handleSave = (values) => {
        getUser(values.search);
    };

    const ocultar = () => {
        setOcultarEstado(true);
        formik.setFieldValue("search", "");
    };

    useEffect(() => {
        if (isError === true) {
            setOcultarEstado(false);
        }
    }, [isError]);

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimesion]);

    useEffect(() => {
        console.log(windowDimesion);
    }, [windowDimesion]);

    return (
        <>
            {tema === TEMA_LIGHT ? (
                <div className="search-contenedor-light d-flex justify-content-between">
                    <div className="search-contenedor__lupa">
                        <img src={iconoLupa} />
                    </div>
                    <div className="search-contenedor__input-movil">
                        {isError === true && ocultarEstado === false ? (
                            <span onClick={ocultar} className="movil__error">
                                {formik.values.error}
                            </span>
                        ) : (
                            <input
                                type="text"
                                name="search"
                                placeholder="Search GitHub username..."
                                className="input__sin-border"
                                value={formik.values.search}
                                onChange={formik.handleChange}
                            />
                        )}
                    </div>
                    <div className="search-contenedor__input-desktop">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search GitHub username..."
                            className="input__sin-border"
                            value={formik.values.search}
                            onChange={formik.handleChange}
                        />
                        {isError === true && <span className="desktop__error">{formik.values.error}</span>}
                    </div>
                    <div className="search-contenedor__boton">
                        <Button
                            variant="primary"
                            size="lg"
                            className="border-0"
                            onClick={formik.handleSubmit}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="search-contenedor-dark d-flex justify-content-between">
                    <div className="search-contenedor__lupa">
                        <img src={iconoLupa} />
                    </div>
                    <div className="search-contenedor__input-movil">
                        {isError === true && ocultarEstado === false ? (
                            <span onClick={ocultar} className="movil__error">
                                {formik.values.error}
                            </span>
                        ) : (
                            <input
                                type="text"
                                name="search"
                                placeholder="Search GitHub username..."
                                className="input__sin-border"
                                value={formik.values.search}
                                onChange={formik.handleChange}
                            />
                        )}
                    </div>
                    <div className="search-contenedor__input-desktop">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search GitHub username..."
                            className="input__sin-border"
                            value={formik.values.search}
                            onChange={formik.handleChange}
                        />
                        {isError === true && <span className="desktop__error">{formik.values.error}</span>}
                    </div>
                    <div className="search-contenedor__boton">
                        <Button
                            variant="primary"
                            size="lg"
                            className="border-0"
                            onClick={formik.handleSubmit}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
