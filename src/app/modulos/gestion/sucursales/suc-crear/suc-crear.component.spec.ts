import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucCrearComponent } from './suc-crear.component';

describe('SucCrearComponent', () => {
  let component: SucCrearComponent;
  let fixture: ComponentFixture<SucCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
