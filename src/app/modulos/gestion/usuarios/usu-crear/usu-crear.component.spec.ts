import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuCrearComponent } from './usu-crear.component';

describe('UsuCrearComponent', () => {
  let component: UsuCrearComponent;
  let fixture: ComponentFixture<UsuCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
