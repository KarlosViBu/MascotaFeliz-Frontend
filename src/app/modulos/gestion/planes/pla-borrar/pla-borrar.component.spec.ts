import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaBorrarComponent } from './pla-borrar.component';

describe('PlaBorrarComponent', () => {
  let component: PlaBorrarComponent;
  let fixture: ComponentFixture<PlaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
