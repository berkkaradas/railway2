const express = require("express");
const { exec } = require("child_process");
const app = express();
const port = 3000;

const jobs = {
  "/suat": "bash run_testGetSuat_1.sh",
  "/murat": "bash run_testGet_murat.sh",
  "/beyza": "bash run_testGetBeyza.sh",
  "/omer": "bash run_testGetOmer.sh",
  "/03job": "bash run_test_project_03_00.sh"
};

for (const path in jobs) {
  app.get(path, (req, res) => {
    exec(jobs[path], (err, stdout, stderr) => {
      if (err) return res.send("Hata: " + err.message);
      res.send("Çalıştırıldı: " + jobs[path] + "<br>" + stdout);
    });
  });
}

app.get("/", (req, res) => {
  res.send("Jar Trigger Server çalışıyor!");
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} üzerinde çalışıyor`);
});
