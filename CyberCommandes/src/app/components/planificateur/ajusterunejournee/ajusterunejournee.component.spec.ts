import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusterunejourneeComponent } from './ajusterunejournee.component';

describe('AjusterunejourneeComponent', () => {
  let component: AjusterunejourneeComponent;
  let fixture: ComponentFixture<AjusterunejourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjusterunejourneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjusterunejourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
