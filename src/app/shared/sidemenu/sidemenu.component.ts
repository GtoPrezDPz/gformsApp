import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      ruta: './template/basics'
    },
    {
      text: 'Dynamics',
      ruta: './template/dynamics'
    },
    {
      text: 'Switches',
      ruta: './template/switches'
    },
  ];
    reactiveMenu: MenuItem[] = [
      {
        text: 'Basics',
        ruta: './reactive/basics'
      },
      {
        text: 'Dynamics',
        ruta: './reactive/dynamics'
      },
      {
        text: 'Switches',
        ruta: './reactive/switches'
      },
  ]
}