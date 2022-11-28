import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysEditarComponent } from './pys-editar.component';

describe('PysEditarComponent', () => {
  let component: PysEditarComponent;
  let fixture: ComponentFixture<PysEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PysEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
