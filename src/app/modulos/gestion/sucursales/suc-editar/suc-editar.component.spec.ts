import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucEditarComponent } from './suc-editar.component';

describe('SucEditarComponent', () => {
  let component: SucEditarComponent;
  let fixture: ComponentFixture<SucEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
