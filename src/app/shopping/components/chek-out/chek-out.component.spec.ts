import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekOutComponent } from './chek-out.component';

describe('ChekOutComponent', () => {
  let component: ChekOutComponent;
  let fixture: ComponentFixture<ChekOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
