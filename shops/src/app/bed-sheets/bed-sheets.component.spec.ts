import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedSheetsComponent } from './bed-sheets.component';

describe('BedSheetsComponent', () => {
  let component: BedSheetsComponent;
  let fixture: ComponentFixture<BedSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BedSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
