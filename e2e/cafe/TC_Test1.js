import { Selector } from 'testcafe';
const dataSet = require('./products.json');

fixture`Getting Started`
    .page`http://localhost:3000/`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });


test('Number of XXL Tshirts should be 4, when clicked on XXL', async t => {
    await t

        .click('input[value=XXL]', { timeout: 0 });
    const elems = Selector('div[class=shelf-item]');
    await t.expect(elems.count).eql(4);
    const l = Selector('div[class=shelf-item]');
    console.log("test priyank" + await elems.count);
    const num = dataSet[0].id;
    console.log('###Priyank### ' + Object.keys(dataSet).length);

});

test('$9 should be the lowest when Sorted Lowest to Highest', async t => {
    await t.eval(() => location.reload(true));
    await t

        .click('div[class=sort]', { timeout: 0 })
        .click('div[class=sort]>select>option[value=lowestprice]', { timeout: 0 });

    const elemfirst = Selector('div[class=shelf-container]>div[class=shelf-item]').nth(0).find('div[class=shelf-item__price]>div>b');
    console.log("testing### " + await elemfirst.innerText);
    console.log("testing### " + await typeof elemfirst.innerText);

    await t.expect(await elemfirst.innerText).eql("9");

});

test('$134 should be the Highest when Sorted Highest to Lowest', async t => {
    await t.eval(() => location.reload(true));
    await t

        .click('div[class=sort]', { timeout: 0 })
        .click('div[class=sort]>select>option[value=highestprice]', { timeout: 0 });

    const elemfirst = Selector('div[class=shelf-container]>div[class=shelf-item]').nth(0).find('div[class=shelf-item__price]>div>b');
    console.log("testing### " + await elemfirst.innerText);
    console.log("testing### " + await typeof elemfirst.innerText);

    await t.expect(await elemfirst.innerText).eql("134");

});

test('verify products persist in floating cart after page reloads', async t => {
    //await t.eval(() => location.reload(true));
    const elems = Selector('div[class=shelf-item]');
    console.log(typeof elems);
    console.log("test priyank" + await elems.count);
    await t

        .click(elems.nth(0))
        .click(elems.nth(1));

    const quantity = Selector('span[class=bag__quantity]');
    await t.expect(await quantity.innerText).eql("2");

    await t.eval(() => location.reload(true));
    const carticon = Selector('div').withAttribute('class', 'float-cart').find('span');
    await t

        .click(carticon);
    await t.expect(await quantity.innerText).eql("2");


    const num = Object.keys(dataSet).length;
    console.log('###Priyank### ' + num);


});

    // test('validate all the items populated over the screen as per the db', async t => {
    //     await t.eval(() => location.reload(true));

    //     const num=  Object.keys(dataSet).length;
    //       console.log('###Priyank### '+  num );

    //         const elems= Selector('div[class=shelf-item]');
    //        await t.expect(elems.count).eql(num);


    // });


