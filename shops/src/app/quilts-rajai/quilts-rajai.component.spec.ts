import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiltsRajaiComponent } from './quilts-rajai.component';

describe('QuiltsRajaiComponent', () => {
  let component: QuiltsRajaiComponent;
  let fixture: ComponentFixture<QuiltsRajaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuiltsRajaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuiltsRajaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
