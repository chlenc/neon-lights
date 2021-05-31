describe('here description', () => {
    it('should open google page', async () => {
        for (let page = 1; page <= 100; page++) {
            await watchPage(page)
        }
    })
})

async function watchPage(page) {
    cy.visit(`https://www.google.com/search?q=%D0%B8%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BE%D0%BA&start=${page}0`)
    let links = []
    await cy.get('[data-text-ad="1"]')
        .then(ads => {
            ads.each((i, ad) => {
                const anchor = ad
                    .getElementsByTagName('a')
                    .item(0)
                const url = anchor.getAttribute('href')
                links.push(url)
                // anchor.click()
                // cy.wait(5000).then(())
                // cy.get('a[href*=\'mailto:\']').each(mail => {
                //     console.log( mail.text())
                // })
                // cy.go('back')
            })
        }).then(() => {
        cy.get('#rso').children().then(results => {
            results.each((i, result) => {
                const anchor = result
                    .getElementsByTagName('a')
                    .item(0)
                const url = anchor.getAttribute('href')
                links.push(url)
            })
        })
    }).then(() => {
        cy.readFile('links.json').then(res => {
            const data = unique([...links, ...res])
            console.log(data.length)
            cy.writeFile('links.json', JSON.stringify(data, null, 4))
        })
    })

}

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}