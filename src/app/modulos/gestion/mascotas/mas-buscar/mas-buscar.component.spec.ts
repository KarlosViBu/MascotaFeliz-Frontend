import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasBuscarComponent } from './mas-buscar.component';

describe('MasBuscarComponent', () => {
  let component: MasBuscarComponent;
  let fixture: ComponentFixture<MasBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
