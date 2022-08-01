import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrductComponent } from './add-prduct.component';

describe('AddPrductComponent', () => {
  let component: AddPrductComponent;
  let fixture: ComponentFixture<AddPrductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
