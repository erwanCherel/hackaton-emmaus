const router = require("express").Router();

const phonesRouter = require("./phones.routes");

router.use("/phones", phonesRouter);

module.exports = router;
