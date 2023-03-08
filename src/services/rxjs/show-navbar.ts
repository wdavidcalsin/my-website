import { Subject } from "rxjs";

interface IShowNavbar {
  isShowNavbar: boolean;
}

export class SubjectShowNavbar {
  subject$ = new Subject<IShowNavbar>();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(showNavbar: IShowNavbar) {
    this.subject$.next(showNavbar);
  }
}

export const sharingShowNavbarService = new SubjectShowNavbar();
