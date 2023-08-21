const functions = require('@google-cloud/functions-framework');
const { google } = require('googleapis');
const dotenv = require('dotenv');
require('dotenv').config()

functions.http('getFinaPoint', async (req, res) => {
  const queryStyle = req.query.style;
  const queryDistance = req.query.distance;
  const queryGender = req.query.gender;
  const queryTime = req.query.time;
  let response;
  let colGender;
  let nameStyle;
  let rowDistance
  try {
    switch (queryStyle) {
      case "01":
        nameStyle = "Freestyle";
        break;
      case "02":
        nameStyle = "Breaststroke";
        break;
      case "03":
        nameStyle = "Backstroke";
        break;
      case "04":
        nameStyle = "Butterfly";
        break;
      case "05":
        nameStyle = "IndividualMedley";
        break;
      case "06":
        nameStyle = "FreestyleRelay";
        break;
      case "07":
        nameStyle = "MedleyRelay";
        break;
    };

    switch (queryGender) {
      case "male":
        colGender = "B";
        break;
      case "female":
        colGender = "C";
        break;
      case "mixed":
        colGender = "D";
        break;
    };

    if (queryStyle == "06" || queryStyle == "07") {
      switch (queryDistance) {
        case "400":
          rowDistance = "1";
          break;
        case "800":
          rowDistance = "2";
          break;
      };
    } else if (queryStyle == "05") {
      switch (queryDistance) {
        case "200":
          rowDistance = "1";
          break;
        case "400":
          rowDistance = "2"
          break;
      }
    } else {
      switch (queryDistance) {
        case "50":
          rowDistance = "1";
          break;
        case "100":
          rowDistance = "2";
          break;
        case "200":
          rowDistance = "3";
          break;
        case "400":
          rowDistance = "4";
          break;
        case "800":
          rowDistance = "5";
          break;
        case "1500":
          rowDistance = "6";
          break;
      };
    };
    const targetCell = nameStyle + "!" + colGender + rowDistance;
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.CRED_PATH,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })
    //const sheetsAuth = await google.auth.getClient()
    const sheets = google.sheets({ version: 'v4', auth: auth });
    data = await sheets.spreadsheets.values.get({
      spreadsheetId: "10K_1kbfMQfHwI3J0wapjslGojIqw56aK-3i12DPlruU",
      range: targetCell,
    });
    const finaPoint_B = ((Number(data.data.values[0][0]) / Number(queryTime)) ** 3)
    const finaPoint = finaPoint_B * 1000
    response = Math.round(finaPoint);
  } catch (error) {
    response = "Error"
  };
  res.send({response:response})
});