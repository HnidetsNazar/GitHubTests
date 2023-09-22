class PricingPage {

  get Header() { return $('body > div.logged-out.env-production.page-responsive.header-white > div.application-main > main > div.p-responsive.container-xl.text-center.mt-7.mt-md-8.mt-lg-9.mb-5.mb-lg-9 > h1')}
  get LinkCompare() { return $('div.mt-6.mt-md-7')}
  get CompareLink() { return $('a[href="#compare-features"]')}
  get CompareFutures() { return $('h1.h1')}
 

  async scrollIntoLinkCompare() {
    await this.LinkCompare.scrollIntoView()
  }

  async clickOnCompareLink() {
    await this.CompareLink.click()
  }

  async scrollIntoCompareFutures() {
    await this.CompareFutures.scrollIntoView()
  }



}

export default new PricingPage()
