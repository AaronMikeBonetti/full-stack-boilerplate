"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.get("/", function (req, res) {
    res.send("hello world");
});
app.use("/", express_1.default.static("../../frontend/src/index.html"));
var port = 5000;
app.listen(port, function () {
    console.log("Website is served on http://localhost:".concat(port));
});
exports.default = app;
