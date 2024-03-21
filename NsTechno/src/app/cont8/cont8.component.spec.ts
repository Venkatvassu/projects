import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont8Component } from './cont8.component';

describe('Cont8Component', () => {
  let component: Cont8Component;
  let fixture: ComponentFixture<Cont8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
