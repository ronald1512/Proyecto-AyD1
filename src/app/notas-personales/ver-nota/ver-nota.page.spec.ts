import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerNotaPage } from './ver-nota.page';

describe('VerNotaPage', () => {
  let component: VerNotaPage;
  let fixture: ComponentFixture<VerNotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
