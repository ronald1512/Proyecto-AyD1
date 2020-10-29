import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasPersonalesPage } from './notas-personales.page';

describe('NotasPersonalesPage', () => {
  let component: NotasPersonalesPage;
  let fixture: ComponentFixture<NotasPersonalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasPersonalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotasPersonalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
