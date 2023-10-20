"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var lib_1 = require("./lib");
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(lib_1.logger);
app.use("/", express_1.default.static("./client"));
app.use("/", routes_1.default);
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
exports.default = app;
