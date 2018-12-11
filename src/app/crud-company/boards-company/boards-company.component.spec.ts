import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsCompanyComponent } from './boards-company.component';

describe('BoardsCompanyComponent', () => {
  let component: BoardsCompanyComponent;
  let fixture: ComponentFixture<BoardsCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
