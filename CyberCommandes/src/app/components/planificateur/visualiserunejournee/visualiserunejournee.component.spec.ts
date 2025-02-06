import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserunejourneeComponent } from './visualiserunejournee.component';

describe('VisualiserunejourneeComponent', () => {
  let component: VisualiserunejourneeComponent;
  let fixture: ComponentFixture<VisualiserunejourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualiserunejourneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualiserunejourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
