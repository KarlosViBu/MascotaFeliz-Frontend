import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaBuscarComponent } from './pla-buscar.component';

describe('PlaBuscarComponent', () => {
  let component: PlaBuscarComponent;
  let fixture: ComponentFixture<PlaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
