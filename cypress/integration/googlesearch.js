// const sleep = (ms) => new Promise(r => setTimeout(r, ms))

describe('here description', () => {

    it('should open google page', () => {
        cy.visit('https://google.com')
        cy.get('input[name="q"]').type('визитки купить');
        cy.get('form').submit()
    })

    it('gets first search result', () => {
        cy.get('[data-text-ad="1"]')
            .then(ads => {
                ads.each((i, ad) => {
                    const element = ad.getElementsByTagName('a').item(0)
                    element.setAttribute('target', '_blank')
                    element.click()
                    console.log(element)
                })
            })
    });
})
