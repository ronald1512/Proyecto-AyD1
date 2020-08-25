import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargamasiva',
  templateUrl: './cargamasiva.page.html',
  styleUrls: ['./cargamasiva.page.scss'],
})
export class CargamasivaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file: File;
 changeListener($event) : void {
    this.file = $event.target.files[0];
    let lector = new FileReader();
    lector.readAsText(this.file);

    lector.onloadend = (s) => {
      let text: string = lector.result as string;
      console.log(text);
      this.chargeFile(text)
    };
  }


  chargeFile(text:String){
    var lineasCursos=text.split("\n");
    console.log(lineasCursos)
  }

}
