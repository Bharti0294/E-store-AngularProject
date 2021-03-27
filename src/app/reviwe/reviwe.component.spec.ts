import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviweComponent } from './reviwe.component';

describe('ReviweComponent', () => {
  let component: ReviweComponent;
  let fixture: ComponentFixture<ReviweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviweComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
