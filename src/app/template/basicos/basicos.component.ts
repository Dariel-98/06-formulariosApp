import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  guardar() {
    console.log(this.miFormulario);
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.form.controls['producto']['invalid'] &&
      this.miFormulario?.form.controls['producto']['touched']
    );
  }
}
