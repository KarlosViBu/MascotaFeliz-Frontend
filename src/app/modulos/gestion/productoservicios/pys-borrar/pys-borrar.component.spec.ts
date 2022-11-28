import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysBorrarComponent } from './pys-borrar.component';

describe('PysBorrarComponent', () => {
  let component: PysBorrarComponent;
  let fixture: ComponentFixture<PysBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PysBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
