import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrductComponent } from './edit-prduct.component';

describe('EditPrductComponent', () => {
  let component: EditPrductComponent;
  let fixture: ComponentFixture<EditPrductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
