// const router = require("express").Router();
// const {
//   signupUser,
//   getUserByUserId,
//   getUsers,
//   updateUsers,
//   deleteUser,
//   loginUser,
// } = require("../controller/user.controller");
// const {
//   addUserValidation,
// } = require("../middleware/validation/user.validation");
// const { checkToken } = require("../middleware/auth/verify.middleware");

// router.post("/", addUserValidation, signupUser);
// router.get("/", checkToken, getUsers);
// router.get("/:id", checkToken, getUserByUserId);
// router.patch("/", checkToken, updateUsers);
// router.delete("/:id", checkToken, deleteUser);
// router.post("/login", loginUser);

// module.exports = router;

const router = require("express").Router()

const { signupUser, findAll, findOne, update, deleteByone } = require('../controller/user.controller')
// const { checkAuth, checkEmailPassword } = require('../middleware/auth/auth.middleware')
// const { addUserValidation, doesAlreadyExist } = require('../middleware/validation/validator.middleware')
const { doesAlreadyExist, addUserValidation} = require('../middleware/validation/user.validation')


router.post('/', doesAlreadyExist, addUserValidation, signupUser)
router.get('/', findAll)
router.get('/:id', findOne)
router.put('/:id', update)
router.delete('/:id', deleteByone)

// router.get("/", checkEmailPassword, );
// router.get("/:id", checkAuth, getUserByUserId);
// router.patch("/", checkAuth, updateUsers);
// router.delete("/:id", checkAuth, deleteUser);
// router.post("/login", loginUser);

module.exports = router;
