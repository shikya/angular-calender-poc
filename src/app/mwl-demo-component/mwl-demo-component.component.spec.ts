import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwlDemoComponentComponent } from './mwl-demo-component.component';

describe('MwlDemoComponentComponent', () => {
  let component: MwlDemoComponentComponent;
  let fixture: ComponentFixture<MwlDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwlDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwlDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
