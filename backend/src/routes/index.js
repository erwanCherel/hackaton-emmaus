const router = require("express").Router();

const phonesRouter = require("./phones.routes");
const statesRouter = require("./states.routes");
const ramsRouter = require("./rams.routes");
const memorysRouter = require("./memorys.routes");

router.use("/phones", phonesRouter);
router.use("/states", statesRouter);
router.use("/rams", ramsRouter);
router.use("/memorys", memorysRouter);

module.exports = router;
