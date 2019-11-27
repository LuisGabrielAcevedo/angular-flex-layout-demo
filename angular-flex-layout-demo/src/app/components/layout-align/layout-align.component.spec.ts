import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAlignComponent } from './layout-align.component';

describe('LayoutAlignComponent', () => {
  let component: LayoutAlignComponent;
  let fixture: ComponentFixture<LayoutAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
