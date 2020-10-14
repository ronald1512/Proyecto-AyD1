import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  name:string;
  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }

  enviarcorreo(correo) {
console.log("LLAMANDO A CORREO")
    console.log(correo)
  }

}
