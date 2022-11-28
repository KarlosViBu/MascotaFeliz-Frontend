import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuListarComponent } from './usu-listar.component';

describe('UsuListarComponent', () => {
  let component: UsuListarComponent;
  let fixture: ComponentFixture<UsuListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
