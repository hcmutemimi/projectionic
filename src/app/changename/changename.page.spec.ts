import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangenamePage } from './changename.page';

describe('ChangenamePage', () => {
  let component: ChangenamePage;
  let fixture: ComponentFixture<ChangenamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangenamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangenamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
