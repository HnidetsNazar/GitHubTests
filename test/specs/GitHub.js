import { expect } from "@wdio/globals";
import MainPage from "./../pages/main.page.js";
import SignUpPage from "../pages/Signuppage.js";
import StartFreePage from "./../pages/StartFree.js";
import SubscribePage from "./../pages/Subscribe.js";
import { Key } from 'webdriverio'
import PricingPage from "./../pages/pricing.page.js"

describe('GitHub tests', () => {
  xit('Test Case 1', async () => {
      await browser.url(`https://github.com`);

      await MainPage.clickOnSignUpBtn()
      await browser.pause(5000)

      await expect(SignUpPage.title).toHaveText("Welcome to GitHub! Let's begin the adventure")

      await SignUpPage.setEmailInput('gnidetslawyer777@gmail.com')
      await browser.pause(3000)

      await SignUpPage.clickOnContinueBtn()
      await browser.pause(4000)

      await SignUpPage.setPasswordInput('gnidets4040')
      await browser.pause(4000)

      await SignUpPage.clickOnContinuePasswordBtn()
      await browser.pause(4000)

      await SignUpPage.setLoginInput('Nazarunaburboruna')
      await browser.pause(3000)

      await SignUpPage.clickContinueUserName()
      await browser.pause(5000)

      await SignUpPage.setTypeInput('y')
      await browser.pause(3000)

      await SignUpPage.clickContinueTypeBtn()
      await browser.pause(3000)

  })

  xit('Test Case 2', async() => {
    await browser.url(`https://github.com`);

    await browser.pause(2000)
    await MainPage.scrollTextTitle()
    await browser.pause(4000)

    await expect(MainPage.TextHeder).toBeDisplayed()

    await expect(MainPage.StartFreeLink).toBeDisplayedInViewport()

    await MainPage.clickStartFreeLink()
    await browser.pause(2000)

    await expect(StartFreePage.PickText).toHaveText("Pick your trial plan")

    await StartFreePage.clickOnBlockBtn()
    await browser.pause(3000)
  })

  xit("Test Case 3", async() => {
    await browser.url(`https://github.com`);

    await MainPage.scrollSubscribeBtn()
    await browser.pause(2000)

    await expect(MainPage.SubscribeBtn).toBeClickable()

    await MainPage.clickOnSubscribeBtn()
    await browser.pause(3000)

    await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')

    await expect(SubscribePage.TextSubscribe).toBeDisplayed()

   

    await SubscribePage.clickEmailInput()
    await browser.pause(3000)

    await SubscribePage.TextEmailInput('gnidetslwyer@gmail.com')
    await browser.pause(2000)

    await SubscribePage.scrollNeedScroll()
    await browser.pause(2000)

    await SubscribePage.clickOnCountrySelect()
    await browser.pause(2000)

    await SubscribePage.clickOnSelectCountry()
    await browser.pause(1000)

    await SubscribePage.clickOnNeedScroll()
    await browser.pause(2000)

    await SubscribePage.clickOnCheckBoxBtn()
    await browser.pause(2000)

    await SubscribePage.clickOnSubscribeBtn()
    await browser.pause(2000)

    await expect(SubscribePage.ThanksSubscribe).toBeDisplayed()

  })

  xit('Test Case 4', async() => {
    await browser.url(`https://github.com`);

    await MainPage.clickOnSearchInput()
    await browser.pause(2000)

    await MainPage.setSearchValue('box')
    await browser.pause(2000)

    await browser.keys(['Enter'])
    await browser.pause(3000)

    await expect(MainPage.BoxLink).toHaveUrlContaining('box')
  })

  it('Test Case 5', async() => {
    await browser.url(`https://github.com`);

    await MainPage.clickOnPricingLink()
    await browser.pause(2000)

    await expect(PricingPage.Header).toBeDisplayed()

    await PricingPage.scrollIntoLinkCompare()
    await browser.pause(2000)

    await PricingPage.clickOnCompareLink()
    await browser.pause(2000)

    await PricingPage.scrollIntoCompareFutures()
    await browser.pause(2000)

    await expect(PricingPage.CompareFutures).toBeDisplayed()

  })
})
