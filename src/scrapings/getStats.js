import puppeteer from 'puppeteer'

import { getGamesInfo } from './getGamesInfo'
import { getTeamsInfo } from './getTeamsInfo'

import { delay } from '../helpers/utils'

export default async function getStats(code) {
    const webSiteUrl = `https://www.flashscore.com.br/jogo/${code}/#/h2h/overall`

    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    })

    const page = await browser.newPage()

    await page.goto(webSiteUrl, { waitUntil: 'networkidle2' })

    await page.click('#onetrust-accept-btn-handler')

    const changeData = await page.$$('.h2hSection > .subTabs.tabs__detail--nav > a')
    const changeOptions = await page.$$('.tabs.tabs__detail > .tabs__group > a')

    const allGamesData = await getGamesInfo(page)
    await delay(2)
    await changeData[1].click()

    const homeGamesData = await getGamesInfo(page)
    await delay(2)
    await changeData[2].click()

    const awayGamesData = await getGamesInfo(page)

    await delay(2)
    await changeOptions[3].click()

    await delay(1)

    const teamsinfo = await getTeamsInfo(page)

    await delay(1)

    await browser.close()

    return { teamsinfo, allGamesData, homeGamesData, awayGamesData }

}