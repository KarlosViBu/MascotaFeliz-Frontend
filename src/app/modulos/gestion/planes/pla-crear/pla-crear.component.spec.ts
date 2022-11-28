import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaCrearComponent } from './pla-crear.component';

describe('PlaCrearComponent', () => {
  let component: PlaCrearComponent;
  let fixture: ComponentFixture<PlaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
