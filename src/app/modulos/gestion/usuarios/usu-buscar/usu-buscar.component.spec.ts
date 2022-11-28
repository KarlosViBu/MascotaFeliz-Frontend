import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuBuscarComponent } from './usu-buscar.component';

describe('UsuBuscarComponent', () => {
  let component: UsuBuscarComponent;
  let fixture: ComponentFixture<UsuBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
