"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// export const save = (skiTerms) => {
//   fs.writeFile(
//     path.join(__dirname, "..", "data", "skiTerms.json"),
//     JSON.stringify(skiTerms, null, 2),
//     (err) => {
//       if (err) {
//         throw err;
//       }
//     }
//   );
// };
var logger = function (req, res, next) {
    console.log("".concat(req.method, " request for ").concat(req.url));
    if (Object.keys(req.body).length) {
        console.log(req.body);
    }
    next();
};
exports.logger = logger;
