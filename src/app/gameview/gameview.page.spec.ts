import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameviewPage } from './gameview.page';

describe('GameviewPage', () => {
  let component: GameviewPage;
  let fixture: ComponentFixture<GameviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
