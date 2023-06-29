const router = require("express").Router();

const phoneControllers = require("../controllers/phoneControllers");

router.get("/", phoneControllers.browse);
// router.get("/:id", phoneControllers.read);
router.get("/:phoneId", phoneControllers.readByPhoneId);
router.put("/:id", phoneControllers.edit);
router.post("/", phoneControllers.add);
router.delete("/:id", phoneControllers.destroy);

module.exports = router;
