import Swal from 'sweetalert2';

// https://sweetalert2.github.io/recipe-gallery/colored-toasts.html

export class Swalert {
  static async alertAccesoExito(mensaje: string) {
    return Swal.fire({
      toast: true,
      color: 'white',
      position: 'bottom-left',
      icon: 'success',
      iconColor: 'white',
      title: mensaje,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#00DC00', // Verde
      didOpen: (t) => {
        t.addEventListener('click', () => {
          Swal.close();
        });
        //t.addEventListener('mouseenter', Swal.stopTimer);
        //t.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }
  static async alertAccesoError(mensaje: string) {
    return Swal.fire({
      toast: true,
      color: 'white',
      position: 'bottom-left',
      icon: 'error',
      iconColor: 'white',
      title: mensaje,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#E40000', // Rojo
      didOpen: (t) => {
        t.addEventListener('click', () => {
          Swal.close();
        });
        //t.addEventListener('mouseenter', Swal.stopTimer);
        //t.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }

  static async alertJuegoGanaste(mensaje: string) {
    return Swal.fire({
      //heightAuto: false,
      toast: true,
      color: 'white',
      position: 'bottom-left',
      icon: 'success',
      iconColor: 'white',
      title: mensaje,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#00DC00', // Verde
      didOpen: (t) => {
        t.addEventListener('click', () => {
          Swal.close();
        });
        //t.addEventListener('mouseenter', Swal.stopTimer);
        //t.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }
  static async alertJuegoPerdiste(mensaje: string) {
    return Swal.fire({
      //heightAuto: false,
      toast: true,
      color: 'white',
      position: 'bottom-left',
      icon: 'error',
      iconColor: 'white',
      title: mensaje,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#E40000', // Rojo
      didOpen: (t) => {
        t.addEventListener('click', () => {
          Swal.close();
        });
        //t.addEventListener('mouseenter', Swal.stopTimer);
        //t.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }
  static async alertJuegoTerminado(mensaje: string) {
    return Swal.fire({
      //heightAuto: false,
      toast: true,
      color: 'white',
      position: 'bottom-left',
      icon: 'success',
      iconColor: 'white',
      title: 'Juego terminado',
      text: mensaje,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#3fc3ee', // Celeste
      didOpen: (t) => {
        t.addEventListener('click', () => {
          Swal.close();
        });
        //t.addEventListener('mouseenter', Swal.stopTimer);
        //t.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }

  static async alertSeCargoTuPuntaje(mensaje: string) {
    return Swal.fire({
      //heightAuto: false,
      toast: true,
      color: 'white',
      position: 'bottom-left',
      icon: 'warning',
      iconColor: 'white',
      title: 'PUNTAJE',
      text: mensaje,
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      background: 'orange', // Celeste
      didOpen: (t) => {
        t.addEventListener('click', () => {
          Swal.close();
        });
        //t.addEventListener('mouseenter', Swal.stopTimer);
        //t.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }
}
