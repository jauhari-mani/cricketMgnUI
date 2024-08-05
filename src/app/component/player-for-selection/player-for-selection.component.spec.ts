import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerForSelectionComponent } from './player-for-selection.component';

describe('PlayerForSelectionComponent', () => {
  let component: PlayerForSelectionComponent;
  let fixture: ComponentFixture<PlayerForSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerForSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerForSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
