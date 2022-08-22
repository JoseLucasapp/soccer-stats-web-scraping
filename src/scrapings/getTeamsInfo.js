export const getTeamsInfo = async (page) => await page.$$eval('#tournament-table-tabs-and-content > div > div > .tableWrapper > .ui-table > .ui-table__body > .table__row--selected', (divs) => divs.map((div) => {
    const position = (div.querySelector('div.table__cell.table__cell--rank.table__cell--sorted div').innerHTML).replace('.', '')
    const team = div.querySelector('div.table__cell.table__cell--participant div div a.tableCellParticipant__name').innerHTML
    const score = div.querySelector('span.table__cell.table__cell--value.table__cell--score').innerHTML
    const points = div.querySelector('span.table__cell.table__cell--value.table__cell--points').innerHTML

    const games = div.querySelectorAll('span.table__cell.table__cell--value')[0].innerHTML
    const wins = div.querySelectorAll('span.table__cell.table__cell--value')[1].innerHTML
    const draws = div.querySelectorAll('span.table__cell.table__cell--value')[2].innerHTML
    const losses = div.querySelectorAll('span.table__cell.table__cell--value')[3].innerHTML

    return { position, team, score, points, games, wins, draws, losses }
}))