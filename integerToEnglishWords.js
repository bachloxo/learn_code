// Simple JS code to convert a number into English Words.
// Copied from CodeSignal Solutions, Coded by psr < https://app.codesignal.com/profile/psr >

a = ` One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen`.split` `
b = `  Twen Thir For Fif Six Seven Eigh Nine`.split` `
w = ` Thousand Million Billion`.split` `

f = integerToEnglishWords = (
    n,
    k = 0,
    o = n % 1000,
    h = o / 100 | 0,
    c = o % 100,
    y = c % 10,
    d = c / 10 | 0
) => n
    ? `${
        f(n / 1000 | 0, k + 1)
        } ${a[h] && a[h] + ` Hundred`} ${
            c < 15
                ? a[c]
                : c < 20
                    ? b[c % 10] + `teen`
                    : b[d] + `ty ` + a[y]
           } ${o ? w[k] : ``} `
        .trim()
        .replace(/ +/g, ` `)
    : k ? `` : `Zero`
