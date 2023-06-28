const router = require("express").Router();

const ramControllers = require("../controllers/ramControllers");

router.get("/", ramControllers.browse);
router.get("/:id", ramControllers.read);
router.put("/:id", ramControllers.edit);
router.post("/", ramControllers.add);
router.delete("/:id", ramControllers.destroy);

module.exports = router;
