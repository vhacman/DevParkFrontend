import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidFull } from './kid-full';

describe('KidFull', () => {
  let component: KidFull;
  let fixture: ComponentFixture<KidFull>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidFull]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidFull);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
