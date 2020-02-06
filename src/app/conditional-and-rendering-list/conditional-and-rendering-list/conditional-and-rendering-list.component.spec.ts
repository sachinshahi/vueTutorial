import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalAndRenderingListComponent } from './conditional-and-rendering-list.component';

describe('ConditionalAndRenderingListComponent', () => {
  let component: ConditionalAndRenderingListComponent;
  let fixture: ComponentFixture<ConditionalAndRenderingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalAndRenderingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalAndRenderingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
