import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaEditarComponent } from './pla-editar.component';

describe('PlaEditarComponent', () => {
  let component: PlaEditarComponent;
  let fixture: ComponentFixture<PlaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
