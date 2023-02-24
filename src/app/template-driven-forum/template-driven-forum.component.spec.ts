import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForumComponent } from './template-driven-forum.component';

describe('TemplateDrivenForumComponent', () => {
  let component: TemplateDrivenForumComponent;
  let fixture: ComponentFixture<TemplateDrivenForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
