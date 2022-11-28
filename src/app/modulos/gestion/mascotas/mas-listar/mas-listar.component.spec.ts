import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasListarComponent } from './mas-listar.component';

describe('MasListarComponent', () => {
  let component: MasListarComponent;
  let fixture: ComponentFixture<MasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
