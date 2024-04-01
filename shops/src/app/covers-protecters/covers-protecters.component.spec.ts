import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversProtectersComponent } from './covers-protecters.component';

describe('CoversProtectersComponent', () => {
  let component: CoversProtectersComponent;
  let fixture: ComponentFixture<CoversProtectersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoversProtectersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoversProtectersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
