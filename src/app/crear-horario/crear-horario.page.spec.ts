import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearHorarioPage } from './crear-horario.page';

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
