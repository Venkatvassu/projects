import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont10Component } from './cont10.component';

describe('Cont10Component', () => {
  let component: Cont10Component;
  let fixture: ComponentFixture<Cont10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
