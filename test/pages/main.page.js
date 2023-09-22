class MainPage {

  get SignUpBtn() { return $('a.HeaderMenu-link.HeaderMenu-link--sign-up.flex-shrink-0.d-none.d-lg-inline-block.no-underline.border.color-border-default.rounded.px-2.py-1')}
  get TextTitle() { return $('div.container-xl.position-relative.z-2')}
  get TextHeder() { return $('h2.color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3')}
  get StartFreeLink() { return $('a.btn-mktg.btn-large-mktg.btn-muted-mktg')}
  get SubscribeBtn() { return $('a.btn-mktg.mb-4.btn-muted-mktg')}
  get SearchInput() { return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > div > qbsearch-input > div.search-input-container.search-with-dialog.position-relative.d-flex.flex-row.flex-items-center.mr-4.rounded > button')}
  get SearchValue() { return $('#query-builder-test')}
  get BoxLink() { return $('a.Link__StyledLink-sc-14289xe-0.fIqerb')}
  get PricingLink() { return $('a.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')}


  async clickOnSignUpBtn() {
      await this.SignUpBtn.click()
  }

  async scrollTextTitle() {
    await this.TextTitle.scrollIntoView()
  }

  async clickStartFreeLink() {
    await this.StartFreeLink.click()
  }

  async scrollSubscribeBtn() {
    await this.SubscribeBtn.scrollIntoView()
  }

  async clickOnSubscribeBtn() {
    await this.SubscribeBtn.click()
  }

  async clickOnSearchInput() {
    await this.SearchInput.click()
  }

  async setSearchValue(value) {
    await this.SearchValue.addValue(value)
  }

  async clickOnPricingLink() {
    await this.PricingLink.click()
  }




}

export default new MainPage()
