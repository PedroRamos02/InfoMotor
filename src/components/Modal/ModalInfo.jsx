import swal from "sweetalert";

function ModalInfo(texto) {
    swal({
        text: texto,
        icon: "info",
    });
}

export default ModalInfo;

