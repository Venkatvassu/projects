import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont3Component } from './cont3.component';

describe('Cont3Component', () => {
  let component: Cont3Component;
  let fixture: ComponentFixture<Cont3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
