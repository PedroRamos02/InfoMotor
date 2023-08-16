import swal from "sweetalert";

function ModalAtencao(texto) {
    
    swal({
        text: texto,
        icon: "warning",
    });
}

export default ModalAtencao;