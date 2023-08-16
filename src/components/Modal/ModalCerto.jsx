import swal from "sweetalert";

function ModalCerto(texto) {
    swal({
        text: texto,
        icon: "success",
    });
}

export default ModalCerto;