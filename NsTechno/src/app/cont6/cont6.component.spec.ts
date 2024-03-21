import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont6Component } from './cont6.component';

describe('Cont6Component', () => {
  let component: Cont6Component;
  let fixture: ComponentFixture<Cont6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
