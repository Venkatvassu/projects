import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont5Component } from './cont5.component';

describe('Cont5Component', () => {
  let component: Cont5Component;
  let fixture: ComponentFixture<Cont5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
