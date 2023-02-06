'use strict';

const Weather = require("./api");

test('Current Weather Status', async () => {
    var response = await new Weather().GetCurrent("Madison");
    var statusCode = response.status; 
    expect(statusCode).toBe(200);
  });