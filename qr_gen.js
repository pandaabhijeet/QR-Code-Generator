import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt(
    [
        {
        "name": "URL",
        "message" : "Type your URL: "
        }
    ]
)
.then((answers) => {
    const url = answers.URL;
    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

})