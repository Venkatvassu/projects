import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBedsComponent } from './all-beds.component';

describe('AllBedsComponent', () => {
  let component: AllBedsComponent;
  let fixture: ComponentFixture<AllBedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
