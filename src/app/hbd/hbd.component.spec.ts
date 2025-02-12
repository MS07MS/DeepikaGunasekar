import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBDComponent } from './hbd.component';

describe('HBDComponent', () => {
  let component: HBDComponent;
  let fixture: ComponentFixture<HBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HBDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
