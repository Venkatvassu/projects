import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportersComponent } from './comporters.component';

describe('ComportersComponent', () => {
  let component: ComportersComponent;
  let fixture: ComponentFixture<ComportersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComportersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
