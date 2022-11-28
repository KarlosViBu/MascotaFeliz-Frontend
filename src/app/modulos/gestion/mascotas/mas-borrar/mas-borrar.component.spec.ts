import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasBorrarComponent } from './mas-borrar.component';

describe('MasBorrarComponent', () => {
  let component: MasBorrarComponent;
  let fixture: ComponentFixture<MasBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
