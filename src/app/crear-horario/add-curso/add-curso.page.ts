import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import {Curso} from '../../cargamasiva/curso.interface'
import {CrearHorarioService} from '../service/crear-horario.service'


@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.page.html',
  styleUrls: ['./add-curso.page.scss'],
})
export class AddCursoPage implements OnInit {
  Checkboxes: any;
  indeterminateState: boolean;
  checkParent: boolean;

  curso:Curso={
    codigo:"",
    nombre:"",
    cursospre:[],
    creditos:"",
    creditospre:""
  };

 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private storage: Storage,
    private servicio:CrearHorarioService
  ) {
    
   }

  async ngOnInit() {

    await this.storage.get('id-curso').then((val) => {
      this.curso=val;
    });

    this.Checkboxes = [
      {
        value: "Lunes",
        isItemChecked: false,
        inicio:"",
        fin:""
      }, {
        value: "Martes",
        isItemChecked: false,
        inicio:"",
        fin:""
      }, {
        value: "Miercoles",
        isItemChecked: false,
        inicio:"",
        fin:""
      }, {
        value: "Jueves",
        isItemChecked: false,
        inicio:"",
        fin:""
      }, {
        value: "Viernes",
        isItemChecked: false,
        inicio:"",
        fin:""
      }, {
        value: "Sabado",
        isItemChecked: false,
        inicio:"",
        fin:""
      }
    ];

  }



  async deletePlace() {
    const alertElment = await this.alertCtrl.create({
      header: "¿Estás seguro que deseas agregar el curso?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        }, {
          text: "Agregar",
          handler: () => {
            this.agregarCurso();
            this.router.navigateByUrl("/crear-horario");
          }
        }
      ]
    });
    await alertElment.present();
  }


  agregarCurso(){
    let array=[];
    for(let i=0;i<this.Checkboxes.length;i++){
      if(this.Checkboxes[i].isItemChecked==true){

        console.log(this.Checkboxes[i].value);
        array.push(this.Checkboxes[i]);
      }


    }



    this.storage.set('array'+this.curso.codigo,array);



  }



  checkCheckbox() {
    setTimeout(() => {
      this.Checkboxes.forEach(item => {
        item.isItemChecked = this.checkParent;
      });
    });
  }

  verifyEvent() {
    const allItems = this.Checkboxes.length;
    let selected = 0;

    this.Checkboxes.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      this.indeterminateState = true;
      this.checkParent = false;
    } else if (selected == allItems) {
      this.checkParent = true;
      this.indeterminateState = false;
    } else {
      this.indeterminateState = false;
      this.checkParent = false;
    }
  }


  updateMyDate($event,dia,numero) {
    const hora = $event.detail.value;


    for(let i=0;i<this.Checkboxes.length;i++){
      if(this.Checkboxes[i].value==dia){
        if(numero==1){
          this.Checkboxes[i].inicio=hora;
        }else if(numero==2){
          this.Checkboxes[i].fin=hora;
        }
        break;
      }
    }
 }

}
