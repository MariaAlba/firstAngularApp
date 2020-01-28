import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploClaseComponent } from './ejemplo-clase.component';

describe('EjemploClaseComponent', () => {
  let component: EjemploClaseComponent;
  let fixture: ComponentFixture<EjemploClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
