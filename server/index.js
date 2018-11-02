const express = require("express");
const rimraf = require("rimraf");
const fs = require("fs");
const path = require("path");
const app = express();
const uploadsDir = path.join(__dirname, "..", "dist", "img");
app.use(express.static(path.join(__dirname, "..", "dist")));

setInterval(() => 
  fs.readdir(uploadsDir, function(err, files) {
    console.log(files);

    files.forEach(function(file, index) {
      fs.stat(path.join(uploadsDir, file), function(err, stat) {
        var endTime, now;
        if (err) {
          return console.error(err);
        }

        now = new Date().getTime();
        endTime = new Date(stat.ctime).getTime() + 1 * 1000;
        if (now > endTime) {
          return rimraf(path.join(uploadsDir, file), function(err) {
            if (err) {
              return console.error(err);
            }
            console.log("successfully deleted");
          });
        }
      });
    });
}), 300 * 1000);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(10010);
