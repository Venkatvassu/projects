import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont9Component } from './cont9.component';

describe('Cont9Component', () => {
  let component: Cont9Component;
  let fixture: ComponentFixture<Cont9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
