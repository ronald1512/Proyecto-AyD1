import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearHorarioPage } from './crear-horario.page';
import { CrearHorarioService } from './service/crear-horario.service';
let servicio: CrearHorarioService;
describe('CrearHorarioPage', () => {
  let component: CrearHorarioPage;
  let fixture: ComponentFixture<CrearHorarioPage>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearHorarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


it('Validar obtener cursos', () => {
  expect(servicio.obtenerCursos()).toBeNull;
});

it('Validar código del curso incorrecto', () => {
  expect(servicio.getHorario("122")).toBeFalsy;
});