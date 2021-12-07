import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OqueDesejaEditarPage } from './oque-deseja-editar.page';

describe('OqueDesejaEditarPage', () => {
  let component: OqueDesejaEditarPage;
  let fixture: ComponentFixture<OqueDesejaEditarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OqueDesejaEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OqueDesejaEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
