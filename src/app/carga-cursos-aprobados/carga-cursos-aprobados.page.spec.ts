import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaCursosAprobadosPage } from './carga-cursos-aprobados.page';

describe('CargaCursosAprobadosPage', () => {
  let component: CargaCursosAprobadosPage;
  let fixture: ComponentFixture<CargaCursosAprobadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaCursosAprobadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaCursosAprobadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
