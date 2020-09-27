import { Component, OnInit } from '@angular/core';
import {CrearHorarioService} from './service/crear-horario.service'
import {CursoHorario, dia} from './service/horario'
import {Horario} from './service/horario'
import {CursosAprobados} from '../carga-cursos-aprobados/services/cursos-aprobados.interface'
import {Curso} from '../cargamasiva/curso.interface'
import { ToastController,ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.page.html',
  styleUrls: ['./crear-horario.page.scss'],
})
export class CrearHorarioPage implements OnInit {

  aprobados:CursosAprobados;
  arregloCursos:Curso[]=[];
  arregloCursos2:Curso[]=[];

  cursos:any[]=[];


  diaCurso:dia={
    horaInicio:"",
    horaFinal:"",
    dia:""
  }

  cursoHorario:CursoHorario={
    codigoCurso:"",
    nombreCurso:"",
    dias:[]
  }

  arregloCursosHorario:CursoHorario[]=[];



  cursosPosibles:Curso[]=[]

  curso:Curso={
    codigo:"",
    nombre:"",
    cursospre:[],
    creditos:"",
    creditospre:""
  };

  constructor(private servicio:CrearHorarioService,public toastController: ToastController,   public modalCtrl : ModalController,  private router: Router,private storage: Storage) { }

  ngOnInit() {
    this.comparacionCursosPendientes();
  }


  //---METODO PARA MOSTRAR MODAL-----
  /*muestraSitio(sitio){
    let modalSitio = this.modalCtrl.create( 'ModalDetalleSitioPage', sitio );
    modalSitio.present();
 }*/
  comparacionCursosPendientes(){


    this.servicio.obtenerCursos().subscribe(res1=>{
      this.servicio.obtenerCursosAprobados().subscribe(res2=>{

        let array1=[];
        let array2=[];
        let array3=[];
        
        for(let i=0;i<res1.length;i++){
          let obj=res1[i].payload.doc.data();
          array1.push(obj)
        }
        
        
        for(let i=0;i<res2.length;i++){
          let obj=res2[i].payload.doc.data();
          array2.push(obj)
          

        }
        



        for(let i=0;i<array2.length;i++){
          //if(array2[i].carnetEstudiante==this.carnet){
            for(let j=0;j<array2[0].cursosAprobados.length;j++){
              array3.push(array2[0].cursosAprobados[j])
              this.cursos.push(array2[0].cursosAprobados[j]);
            }
          //}
        }

        let tmp=this.servicio.comparacionCursos(array1,array3)
        
        for(let z=0;z<tmp.length;z++){
          this.curso={
            codigo:"",
            nombre:"",
            cursospre:[],
            creditos:"",
            creditospre:""
          };
          this.curso.codigo=tmp[z].codigo;
          this.curso.nombre=tmp[z].nombre;
          this.curso.cursospre=tmp[z].cursospre;
          this.curso.creditos=tmp[z].creditos;
          this.curso.creditospre=tmp[z].creditospre;


          this.arregloCursos.push(this.curso);

        }
        this.cursosDesbloqueados();

      })
    })


  }

  cursosDesbloqueados(){
    //this.cursos = Cursos aprobados
    //this.arregloCursos = Cursos pendientes
 

    for(let i=0;i<this.arregloCursos.length;i++){
      let obj=this.arregloCursos[i].cursospre;
      

      if(this.cursosPreAprobados(obj)){

        this.arregloCursos2.push(this.arregloCursos[i]);
      }
    }
    console.log("Cursos Desbloqueados")
  }


  cursosPreAprobados(arreglo:any []):boolean{


    if(arreglo.length==0)return true;

    let boolean=false;
    for(let i=0;i<arreglo.length;i++){

      for(let j=0;j<this.cursos.length;j++){
        
       
        

        if(String(arreglo[i])==String(this.cursos[j])){
          boolean=true;
          break;
        }
      }

      if(boolean==false){
        return false;
      }else{
        boolean=false;
      }

    }
    
    return true;
  }

  agregarCurso(codigo,nombre,horaInicio,horaFinal,dias){
    
   
  }

  async crearHorario(){




    let horario:Horario={
    carnetEstudiante:"1",
    cursos:[]
    }

    for(let i=0;i<this.arregloCursos2.length;i++){
      await this.storage.get('array'+this.arregloCursos2[i].codigo).then((val) => {
        if(val!=null && val!= undefined){
          console.log(val)
          


          this.cursoHorario={
            codigoCurso:"",
            nombreCurso:"",
            dias:[]
          }
      
          

          let arraydia=[];
      
          for(let j=0;j<val.length;j++){
            this.diaCurso={
              horaInicio:"",
              horaFinal:"",
              dia:""
            }
            this.diaCurso={
              horaInicio:val[j].inicio,
              horaFinal:val[j].fin,
              dia:val[j].value
            }
            arraydia.push(this.diaCurso)
          }

          this.cursoHorario={
            codigoCurso:this.arregloCursos2[i].codigo,
            nombreCurso:this.arregloCursos2[i].nombre,
            dias:arraydia
          }
      
          this.arregloCursosHorario.push(this.cursoHorario);


        }
      });


     

    }

    console.log("areglo finaaaaaaaaaaaaaaaaaaaaal")
    console.log(this.arregloCursosHorario)
    horario.cursos=this.arregloCursosHorario;

    await this.limpiarLocalStorage();

    this.servicio.insertar(horario)

  }

  async limpiarLocalStorage(){

    for(let i=0;i<this.arregloCursos2.length;i++){
      console.log(this.arregloCursos2[i].codigo)
        this.storage.set('array'+this.arregloCursos2[i].codigo,null);
    }

  }

  agregarCursoPage(id) {
    console.log(id)
    this.storage.set('id-curso',id);
    this.router.navigate(['/crear-horario/add-curso']);
  }


}
