import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDescriptionComponent } from './quote-description.component';

describe('QuoteDescriptionComponent', () => {
  let component: QuoteDescriptionComponent;
  let fixture: ComponentFixture<QuoteDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
