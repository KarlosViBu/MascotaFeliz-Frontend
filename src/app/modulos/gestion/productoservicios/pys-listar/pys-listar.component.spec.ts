import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysListarComponent } from './pys-listar.component';

describe('PysListarComponent', () => {
  let component: PysListarComponent;
  let fixture: ComponentFixture<PysListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PysListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
