import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDevelopmentWorkFlowComponent } from './real-development-work-flow.component';

describe('RealDevelopmentWorkFlowComponent', () => {
  let component: RealDevelopmentWorkFlowComponent;
  let fixture: ComponentFixture<RealDevelopmentWorkFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealDevelopmentWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealDevelopmentWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
