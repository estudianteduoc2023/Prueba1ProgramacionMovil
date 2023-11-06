import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IslandPage } from './island.page';

describe('IslandPage', () => {
  let component: IslandPage;
  let fixture: ComponentFixture<IslandPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IslandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
