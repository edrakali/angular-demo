import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveInputTestComponent } from './directive-input-test.component';

describe('DirectiveInputTestComponent', () => {
  let component: DirectiveInputTestComponent;
  let fixture: ComponentFixture<DirectiveInputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveInputTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveInputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
