import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasEditarComponent } from './mas-editar.component';

describe('MasEditarComponent', () => {
  let component: MasEditarComponent;
  let fixture: ComponentFixture<MasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
