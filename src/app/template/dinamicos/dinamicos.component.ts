import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Dariel',
    favoritos: [
      { id: 1, nombre: 'Dota' },
      { id: 2, nombre: 'World of Warcraft' },
      { id: 3, nombre: 'StarCraft' },
    ],
  };

  guardar() {
    console.log('Formulario posteado');
  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
