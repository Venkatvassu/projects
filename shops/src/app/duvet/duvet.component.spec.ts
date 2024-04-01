import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvetComponent } from './duvet.component';

describe('DuvetComponent', () => {
  let component: DuvetComponent;
  let fixture: ComponentFixture<DuvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuvetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
