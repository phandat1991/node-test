import fetch from 'node-fetch';
import querystring from 'querystring';
import crypto from 'crypto';

const url = `https://bittrex.com/api/v1.1/account/getbalances?apikey=${apikey}&nonce=${Date.now()}`;

const hash = crypto.createHmac('sha512', secretKey)
                   .update(url)
                   .digest('hex');

                   
fetch(url, {
  headers: {
    apisign: hash,
  },
}).then(res => res.json()).then((res) => {
  console.log(res);
});

import bittrex from 'node-bittrex-api';

const a = {
  name: 'abcdsf',
  num: 2321,
};

const secretKey = '57965d935f024ba4b34c81757e3f47b4';
const apikey = '203557af855c4e1d95a5b64d66d1cde6';

bittrex.options({
  apikey: apikey,
  apisecret: secretKey,
});

// bittrex.getbalance({ currency: 'BTC' }, (data, err) => {
//   // const result = data.result.filter(item => item.Balance > 0);
//   console.log(data);
// });

// bittrex.getopenorders({}, (data, err) => {
//   // const result = data.result.filter(item => item.Balance > 0);
//   console.log(data);
// });

bittrex.getbalance({ currency: 'XVG' }, (data, err) => {
  // const result = data.result.filter(item => item.Balance > 0);
  bittrex.tradesell({
    MarketName: 'BTC-XVG',
    OrderType: 'LIMIT',
    Quantity: data.result.Balance,
    Rate: 0.00000987,
    TimeInEffect: 'GOOD_TIL_CANCELLED', // supported options are 'IMMEDIATE_OR_CANCEL', 'GOOD_TIL_CANCELLED', 'FILL_OR_KILL'
    ConditionType: 'NONE', // supported options are 'NONE', 'GREATER_THAN', 'LESS_THAN'
    Target: 0, // used in conjunction with ConditionType
  }, (data, err) => {
    console.log(data);
    console.log(err);
  });
});

