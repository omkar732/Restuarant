import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestuarantComponent } from './list-restuarant.component';

describe('ListRestuarantComponent', () => {
  let component: ListRestuarantComponent;
  let fixture: ComponentFixture<ListRestuarantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestuarantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
