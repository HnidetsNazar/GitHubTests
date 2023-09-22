class SignUpPage {

  get title() { return $('h1.sr-only')}
  get EmailInput() { return $('#email')}
  get ContinueBtn() { return $('button.js-continue-button.signup-continue-button.form-control.px-3.width-full.width-sm-auto.mt-4.mt-sm-0')}
  get PasswordInput() { return $('#password')}
  get ContinuePasswordBtn() { return $('#password-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}
  get LoginInput() { return $('#login')}
  get ContinueUserName() { return $('#username-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}
  get TypeInput() { return $('#opt_in')}
  get ContinueTypeBtn() { return $('#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}


  async setEmailInput(value) {
      await this.EmailInput.addValue(value)
  }

  async clickOnContinueBtn() {
    await this.ContinueBtn.click()
}

async setPasswordInput(value) {
  await this.PasswordInput.addValue(value)
}

async clickOnContinuePasswordBtn() {
  await this.ContinuePasswordBtn.click()
}

async setLoginInput(value) {
  await this.LoginInput.addValue(value)
}

async clickContinueUserName() {
  await this.ContinueUserName.click()
}

async setTypeInput(value) {
  await this.TypeInput.addValue(value)
}

async clickContinueTypeBtn() {
  await this.ContinueTypeBtn.click()
}


}

export default new SignUpPage()
