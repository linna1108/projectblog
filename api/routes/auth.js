const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

//REGISTER
router.post(
	"/register",
	[
		check("username", "Username is required").notEmpty(),
		check("email", "Please include a valid email").isEmail(),
		check("password", "Please enter password of 6 or more characters").isLength(
			{ min: 6 }
		), 
	],
	async (req, res) => {
    const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { username, email, password } = req.body;
		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({
					errors: [
						{ msg: `User with ${email} already exists in the database` },
					],
				});
			}

			user = new User({
				username,
				email,
				password,
			});
			await user.save();

			res.status(201).json((user._id));
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		} 
	}
);

//LOGIN
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password of 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json("Wrong password or username!");
      }

      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (originalPassword !== req.body.password) {
        return res.status(401).json("Wrong password or username!");
      }
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );

      const { password, ...info } = user._doc;

      res.status(200).json({ ...info, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
module.exports = router;
