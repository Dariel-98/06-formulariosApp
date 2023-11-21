import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Rtx 3080',
    precio: 10,
    existencias: 10,
  };

  guardar() {
    // console.log(this.miFormulario);
    console.log('Posteo correcto');
    this.miFormulario.resetForm({ precio: 0, existencias: 0 });
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.form.controls['producto']?.invalid &&
      this.miFormulario?.form.controls['producto']['touched']
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.value < 0 &&
      this.miFormulario.controls['precio']['touched']
    );
  }
  existenciasValido(): boolean {
    return (
      this.miFormulario?.controls['existencias']?.value < 1 &&
      this.miFormulario.controls['existencias']['touched']
    );
  }
}
