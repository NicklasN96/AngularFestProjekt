import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsCreateCompanyComponent } from './boards-create-company.component';

describe('BoardsCreateCompanyComponent', () => {
  let component: BoardsCreateCompanyComponent;
  let fixture: ComponentFixture<BoardsCreateCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsCreateCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsCreateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
