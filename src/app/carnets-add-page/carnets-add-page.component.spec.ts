import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetsAddPageComponent } from './carnets-add-page.component';

describe('CarnetsAddPageComponent', () => {
  let component: CarnetsAddPageComponent;
  let fixture: ComponentFixture<CarnetsAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetsAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetsAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
