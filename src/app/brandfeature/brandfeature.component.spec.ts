import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandfeatureComponent } from './brandfeature.component';

describe('BrandfeatureComponent', () => {
  let component: BrandfeatureComponent;
  let fixture: ComponentFixture<BrandfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
