import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaListarComponent } from './pla-listar.component';

describe('PlaListarComponent', () => {
  let component: PlaListarComponent;
  let fixture: ComponentFixture<PlaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
