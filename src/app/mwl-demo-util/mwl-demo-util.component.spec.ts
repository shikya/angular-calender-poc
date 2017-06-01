import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwlDemoUtilComponent } from './mwl-demo-util.component';

describe('MwlDemoUtilComponent', () => {
  let component: MwlDemoUtilComponent;
  let fixture: ComponentFixture<MwlDemoUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwlDemoUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwlDemoUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
