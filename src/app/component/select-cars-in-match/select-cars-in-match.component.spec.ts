import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCarsInMatchComponent } from './select-cars-in-match.component';

describe('SelectCarsInMatchComponent', () => {
  let component: SelectCarsInMatchComponent;
  let fixture: ComponentFixture<SelectCarsInMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCarsInMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCarsInMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
