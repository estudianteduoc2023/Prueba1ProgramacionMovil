import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilmetaPage } from './perfilmeta.page';

describe('PerfilmetaPage', () => {
  let component: PerfilmetaPage;
  let fixture: ComponentFixture<PerfilmetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilmetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
