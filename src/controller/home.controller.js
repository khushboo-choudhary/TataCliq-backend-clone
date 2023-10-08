const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    console.log("Tata Cliq Started");
    const displayName = req.user
      ? req.user.first_name + " " + req.user.last_name
      : null;
    return res.render("users/index.ejs", { displayName });
  } catch (err) {
    return res.send("err", err.message);
  }
});

module.exports = router;
