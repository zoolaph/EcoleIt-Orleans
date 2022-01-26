import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsAddPageComponent } from './documents-add-page.component';

describe('DocumentsAddPageComponent', () => {
  let component: DocumentsAddPageComponent;
  let fixture: ComponentFixture<DocumentsAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
