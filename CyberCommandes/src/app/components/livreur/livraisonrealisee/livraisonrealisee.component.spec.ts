import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonrealiseeComponent } from './livraisonrealisee.component';

describe('LivraisonrealiseeComponent', () => {
  let component: LivraisonrealiseeComponent;
  let fixture: ComponentFixture<LivraisonrealiseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivraisonrealiseeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonrealiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
