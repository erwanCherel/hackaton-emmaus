const router = require("express").Router();

const stateControllers = require("../controllers/stateControllers");

router.get("/", stateControllers.browse);
router.get("/:id", stateControllers.read);
router.put("/:id", stateControllers.edit);
router.post("/", stateControllers.add);
router.delete("/:id", stateControllers.destroy);

module.exports = router;
