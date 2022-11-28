import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasCrearComponent } from './mas-crear.component';

describe('MasCrearComponent', () => {
  let component: MasCrearComponent;
  let fixture: ComponentFixture<MasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
