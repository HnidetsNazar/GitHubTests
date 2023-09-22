class StartFreePage {

  get PickText() { return $('//*[text()="Pick your trial plan"]')}
  get BlockBtn() { return $('a.d-block.mb-2.hover-grow.no-underline.position-relative.rounded-3.color-fg-default')}


  async clickOnBlockBtn() {
    await this.BlockBtn.click()
  }
}

export default new StartFreePage()
