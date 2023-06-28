const router = require("express").Router();

const phonesRouter = require("./phones.routes");
const statesRouter = require("./states.routes");
const memoriesRouter = require("./memories.routes");
const ramsRouter = require("./rams.routes");

router.use("/phones", phonesRouter);
router.use("/states", statesRouter);
router.use("/memories", memoriesRouter);
router.use("/rams", ramsRouter);

module.exports = router;
