import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBuscarComponent } from './pro-buscar.component';

describe('ProBuscarComponent', () => {
  let component: ProBuscarComponent;
  let fixture: ComponentFixture<ProBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
