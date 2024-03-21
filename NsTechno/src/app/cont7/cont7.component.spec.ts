import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont7Component } from './cont7.component';

describe('Cont7Component', () => {
  let component: Cont7Component;
  let fixture: ComponentFixture<Cont7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
