import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerContraseniaPage } from './restablecer-contrasenia.page';

describe('RestablecerContraseniaPage', () => {
  let component: RestablecerContraseniaPage;
  let fixture: ComponentFixture<RestablecerContraseniaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablecerContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
