import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaphrComponent } from './swaphr.component';

describe('SwaphrComponent', () => {
  let component: SwaphrComponent;
  let fixture: ComponentFixture<SwaphrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwaphrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwaphrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
