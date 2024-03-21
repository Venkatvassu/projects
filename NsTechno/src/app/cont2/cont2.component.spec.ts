import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont2Component } from './cont2.component';

describe('Cont2Component', () => {
  let component: Cont2Component;
  let fixture: ComponentFixture<Cont2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cont2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cont2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
