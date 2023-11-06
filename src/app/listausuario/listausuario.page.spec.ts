import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListausuarioPage } from './listausuario.page';

describe('ListausuarioPage', () => {
  let component: ListausuarioPage;
  let fixture: ComponentFixture<ListausuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListausuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
