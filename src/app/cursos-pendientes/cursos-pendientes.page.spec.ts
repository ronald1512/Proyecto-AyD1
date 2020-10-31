import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CursosPendientesPage } from './cursos-pendientes.page';

describe('CursosPendientesPage', () => {
  let component: CursosPendientesPage;
  let fixture: ComponentFixture<CursosPendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosPendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
/*
  it('Crear componente', () => {
    expect(component).toBeTruthy();
  });
  */
});
