import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBorrarComponent } from './pro-borrar.component';

describe('ProBorrarComponent', () => {
  let component: ProBorrarComponent;
  let fixture: ComponentFixture<ProBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
