import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillowsComponent } from './pillows.component';

describe('PillowsComponent', () => {
  let component: PillowsComponent;
  let fixture: ComponentFixture<PillowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PillowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PillowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
