import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertaService {
  private toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  sucesso(mensagem: string): Promise<SweetAlertResult> {
    return this.toast.fire({ icon: 'success', title: mensagem });
  }

  erro(mensagem: string): Promise<SweetAlertResult> {
    return this.toast.fire({ icon: 'error', title: mensagem });
  }

  info(mensagem: string): Promise<SweetAlertResult> {
    return this.toast.fire({ icon: 'info', title: mensagem });
  }

  confirmar(titulo: string, texto?: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, confirmar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-danger me-2',
        cancelButton: 'btn btn-secondary',
      },
      buttonsStyling: false,
    });
  }
}
