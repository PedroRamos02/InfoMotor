import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";


function PaginaBase() {
    return(
        <>
            <Cabecalho />
                <Outlet />
            <Rodape />
        </>
    )
}

export default PaginaBase;