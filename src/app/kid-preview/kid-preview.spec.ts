import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidPreview } from './kid-preview';

describe('KidPreview', () => {
  let component: KidPreview;
  let fixture: ComponentFixture<KidPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
