import Swal from "sweetalert2";

export function generarMensajeError(textoMnsj:string){
    Swal.fire({
        title: textoMnsj,
        icon: "error",
      })
}

export function generarMensajeExito(textoMnsj:string){
    Swal.fire({
        title: textoMnsj,
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
        position: 'bottom'
      })
}
