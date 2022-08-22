export const getGamesInfo = async (page) => await page.$$eval('.h2hSection > .h2h > .h2h__section > .rows > .h2h__row', (divs) => divs.map((div) => {
    const date = div.querySelector('span.h2h__date').innerHTML
    const event = div.querySelector('span.h2h__event').title
    const home = div.querySelector('span.h2h__homeParticipant span').innerHTML
    const away = div.querySelector('span.h2h__awayParticipant span').innerHTML
    const result = div.querySelector('span.h2h__icon').childElementCount > 0 ? div.querySelector('span.h2h__icon div').innerHTML : ''
    const scoreHome = div.querySelectorAll('span.h2h__result span')[0].innerHTML
    const scoreAway = div.querySelectorAll('span.h2h__result span')[1].innerHTML

    return { date, event, home, away, result, scoreHome, scoreAway }
}))