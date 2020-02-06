import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntroductionComponent } from './component-introduction.component';

describe('ComponentIntroductionComponent', () => {
  let component: ComponentIntroductionComponent;
  let fixture: ComponentFixture<ComponentIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
