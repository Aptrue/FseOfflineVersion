import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumCriancaAdultoPage } from './num-crianca-adulto.page';

describe('NumCriancaAdultoPage', () => {
  let component: NumCriancaAdultoPage;
  let fixture: ComponentFixture<NumCriancaAdultoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumCriancaAdultoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumCriancaAdultoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
