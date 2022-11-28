import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucBorrarComponent } from './suc-borrar.component';

describe('SucBorrarComponent', () => {
  let component: SucBorrarComponent;
  let fixture: ComponentFixture<SucBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
