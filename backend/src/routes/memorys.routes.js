const router = require("express").Router();

const memoryControllers = require("../controllers/memoryControllers");

router.get("/", memoryControllers.browse);
router.get("/:id", memoryControllers.read);
router.put("/:id", memoryControllers.edit);
router.post("/", memoryControllers.add);
router.delete("/:id", memoryControllers.destroy);

module.exports = router;
