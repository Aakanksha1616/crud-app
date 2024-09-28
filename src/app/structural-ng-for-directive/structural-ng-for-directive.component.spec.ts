import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralNgForDirectiveComponent } from './structural-ng-for-directive.component';

describe('StructuralNgForDirectiveComponent', () => {
  let component: StructuralNgForDirectiveComponent;
  let fixture: ComponentFixture<StructuralNgForDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralNgForDirectiveComponent]
    });
    fixture = TestBed.createComponent(StructuralNgForDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
