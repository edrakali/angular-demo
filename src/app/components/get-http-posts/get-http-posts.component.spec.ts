import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHttpPostsComponent } from './get-http-posts.component';

describe('GetHttpPostsComponent', () => {
  let component: GetHttpPostsComponent;
  let fixture: ComponentFixture<GetHttpPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHttpPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHttpPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
