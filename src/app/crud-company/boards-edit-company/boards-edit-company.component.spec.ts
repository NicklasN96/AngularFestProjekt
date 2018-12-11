import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsEditCompanyComponent } from './boards-edit-company.component';

describe('BoardsEditCompanyComponent', () => {
  let component: BoardsEditCompanyComponent;
  let fixture: ComponentFixture<BoardsEditCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsEditCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsEditCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
