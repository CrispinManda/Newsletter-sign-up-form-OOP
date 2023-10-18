"use strict";

class SignUpForm {
  private signUpCardEl: HTMLElement | null;
  private successCardEl: HTMLElement | null;
  private signUpFormEl: HTMLFormElement | null;
  private emailIn: HTMLInputElement | null;
  private submitBtn: HTMLButtonElement | null;
  private dismissBtn: HTMLButtonElement | null;
  private submittedEmailEl: HTMLElement | null;

  constructor() {
    this.signUpCardEl = document.querySelector(".sign-up-card");
    this.successCardEl = document.querySelector(".success-card");
    this.signUpFormEl = document.querySelector(".sign-up-form");
    this.emailIn = document.getElementById("email") as HTMLInputElement;
    this.submitBtn = document.querySelector(".submit-btn");
    this.dismissBtn = document.querySelector(".dismiss-btn");
    this.submittedEmailEl = document.querySelector(".submitted-email");

    if (this.submitBtn && this.dismissBtn) {
      this.submitBtn.addEventListener("click", this.submitEmail.bind(this));
      this.dismissBtn.addEventListener("click", this.toggleCards.bind(this));
    }
  }

  private toggleCards() {
    if (this.signUpCardEl && this.successCardEl) {
      this.signUpCardEl.classList.toggle("hidden");
      this.successCardEl.classList.toggle("hidden");
    }
  }

  private validateEmail(email: string): boolean {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null;
  }

  private submitEmail(e: Event) {
    if (e) {
      e.preventDefault();
    }

    if (this.emailIn && this.signUpFormEl) {
      if (this.validateEmail(this.emailIn.value)) {
        if (this.submittedEmailEl) {
          this.submittedEmailEl.innerText = this.emailIn.value;
        }
        this.toggleCards();
        this.emailIn.value = "";
        this.signUpFormEl.classList.remove("error");
      } else {
        if (this.signUpFormEl) {
          this.signUpFormEl.classList.add("error");
        }
      }
    }
  }
}

const signUpForm = new SignUpForm();
