"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = (0, express_1.default)();
router.get("/", function (req, res) {
    res.send("hello world!");
});
// router.get("/", (req, res) => {
// });
// router.post("/", bodyParser.json(), (req, res) => {
//   res.json({
//     status: "success",
//     term: req.body
//   });
// });
// router.delete("/:term", (req, res) => {
//   res.json({
//     status: "success",
//     removed: req.params.term,
//     newLength: skiTerms.length
//   });
// });
exports.default = router;
