import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucListarComponent } from './suc-listar.component';

describe('SucListarComponent', () => {
  let component: SucListarComponent;
  let fixture: ComponentFixture<SucListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
