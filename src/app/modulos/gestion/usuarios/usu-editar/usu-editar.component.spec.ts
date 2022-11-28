import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuEditarComponent } from './usu-editar.component';

describe('UsuEditarComponent', () => {
  let component: UsuEditarComponent;
  let fixture: ComponentFixture<UsuEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
