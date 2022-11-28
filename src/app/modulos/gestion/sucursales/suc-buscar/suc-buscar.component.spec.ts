import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucBuscarComponent } from './suc-buscar.component';

describe('SucBuscarComponent', () => {
  let component: SucBuscarComponent;
  let fixture: ComponentFixture<SucBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
