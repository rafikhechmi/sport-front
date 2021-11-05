import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyMatchComponent } from './dispaly-match.component';

describe('DispalyMatchComponent', () => {
  let component: DispalyMatchComponent;
  let fixture: ComponentFixture<DispalyMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispalyMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
