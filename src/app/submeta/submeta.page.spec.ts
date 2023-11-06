import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmetaPage } from './submeta.page';

describe('SubmetaPage', () => {
  let component: SubmetaPage;
  let fixture: ComponentFixture<SubmetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubmetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
