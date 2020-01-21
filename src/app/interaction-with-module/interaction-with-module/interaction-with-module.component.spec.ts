import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionWithModuleComponent } from './interaction-with-module.component';

describe('InteractionWithModuleComponent', () => {
  let component: InteractionWithModuleComponent;
  let fixture: ComponentFixture<InteractionWithModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionWithModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionWithModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
