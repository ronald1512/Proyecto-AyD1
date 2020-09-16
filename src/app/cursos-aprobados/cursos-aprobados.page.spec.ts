import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosAprobadosPage } from './cursos-aprobados.page';

describe('CursosAprobadosPage', () => {
  let component: CursosAprobadosPage;
  let fixture: ComponentFixture<CursosAprobadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAprobadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosAprobadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
