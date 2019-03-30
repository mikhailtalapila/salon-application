import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SalonAppComponent } from './salon-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SalonAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SalonAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'salon-application'`, () => {
    const fixture = TestBed.createComponent(SalonAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('salon-application');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SalonAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to salon-application!');
  });
});
