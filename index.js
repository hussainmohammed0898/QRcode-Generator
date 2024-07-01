import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Enter any URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('QRCode.png'));
    console.log("QR code generated and saved as 'QRCode.png'");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  });

