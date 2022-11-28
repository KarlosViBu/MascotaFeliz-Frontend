import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysBuscarComponent } from './pys-buscar.component';

describe('PysBuscarComponent', () => {
  let component: PysBuscarComponent;
  let fixture: ComponentFixture<PysBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PysBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
