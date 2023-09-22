class SubscribePage {

  get TextSubscribe() { return $('#hero-section-brand-heading')}
  get EmailInput() { return $('input.Primer_Brand__TextInput-module__TextInput___EtKj3.TextInput.Primer_Brand__TextInput-module__TextInput--medium___kJrew.Primer_Brand__TextInput-module__TextInput--fullWidth___rbllM')}
  get scrollSubscribe() { return $('span.Primer_Brand__Button-module__Button__text___Z3ocU')}
  get CountrySelect() { return $('#country')}
  get NeedScroll() { return $('#form')}
  get SelectCountry() { return $('#country > option:nth-child(225)')}
  get CheckBoxBtn() { return $('#gated-agree-marketingEmailOptin1')}
  get SubscribeBtn() { return $('#form > form > div > button')}
  get ThanksSubscribe() { return $('#hero-section-brand-heading')}


  async scrollOnSubscribe() {
    await this.EmailInput.scrollIntoView()
  }

  async TextEmailInput(value) {
    await this.EmailInput.addValue(value)
  }

  async clickEmailInput() {
    await this.EmailInput.click()
  }

  async scrollNeedScroll() {
    await this.NeedScroll.scrollIntoView()
  }

  async clickOnCountrySelect() {
    await this.CountrySelect.click()
  }

  async clickOnSelectCountry() {
    await this.SelectCountry.click()
  }

  async clickOnNeedScroll() {
    await this.NeedScroll.click()
  }

  async clickOnCheckBoxBtn() {
    await this.CheckBoxBtn.click()
  }

  async clickOnSubscribeBtn() {
    await this.SubscribeBtn.click()
  }




}

export default new SubscribePage()
