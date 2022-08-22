export const getTeamsLogos = async (page) => await page.$$eval('.duelParticipant', (images) => images.map((img) => {
    const homeTeamImage = img.querySelector('div.duelParticipant__home a img').src
    const awayTeamImage = img.querySelector('div.duelParticipant__away a img').src
    const homeTeamName = img.querySelector('div.duelParticipant__home  div.participant__participantNameWrapper div.participant__participantName.participant__overflow a').innerHTML
    const awayTeamName = img.querySelector('div.duelParticipant__away  div.participant__participantNameWrapper div.participant__participantName.participant__overflow a').innerHTML

    return { homeTeamImage, awayTeamImage, homeTeamName, awayTeamName }
}))