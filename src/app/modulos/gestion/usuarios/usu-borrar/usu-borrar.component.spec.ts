import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuBorrarComponent } from './usu-borrar.component';

describe('UsuBorrarComponent', () => {
  let component: UsuBorrarComponent;
  let fixture: ComponentFixture<UsuBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
