import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInjecaoDeDependenciasComponent } from './cursos-injecao-de-dependencias.component';

describe('CursosInjecaoDeDependenciasComponent', () => {
  let component: CursosInjecaoDeDependenciasComponent;
  let fixture: ComponentFixture<CursosInjecaoDeDependenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosInjecaoDeDependenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosInjecaoDeDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
