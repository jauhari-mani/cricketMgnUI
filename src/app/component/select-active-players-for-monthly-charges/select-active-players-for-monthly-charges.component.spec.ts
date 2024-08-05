import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActivePlayersForMonthlyChargesComponent } from './select-active-players-for-monthly-charges.component';

describe('SelectActivePlayersForMonthlyChargesComponent', () => {
  let component: SelectActivePlayersForMonthlyChargesComponent;
  let fixture: ComponentFixture<SelectActivePlayersForMonthlyChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectActivePlayersForMonthlyChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectActivePlayersForMonthlyChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
