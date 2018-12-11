import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsDetailCompanyComponent } from './boards-detail-company.component';

describe('BoardsDetailCompanyComponent', () => {
  let component: BoardsDetailCompanyComponent;
  let fixture: ComponentFixture<BoardsDetailCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsDetailCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsDetailCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
