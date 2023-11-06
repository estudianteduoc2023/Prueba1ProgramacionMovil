import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacioncoPage } from './confirmacionco.page';

describe('ConfirmacioncoPage', () => {
  let component: ConfirmacioncoPage;
  let fixture: ComponentFixture<ConfirmacioncoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmacioncoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
