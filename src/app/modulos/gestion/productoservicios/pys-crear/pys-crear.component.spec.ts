import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysCrearComponent } from './pys-crear.component';

describe('PysCrearComponent', () => {
  let component: PysCrearComponent;
  let fixture: ComponentFixture<PysCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PysCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
