"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var PhotoSize_1 = require("./PhotoSize");
var VideoNote = /** @class */ (function () {
    function VideoNote() {
    }
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], VideoNote.prototype, "file_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], VideoNote.prototype, "length", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], VideoNote.prototype, "duration", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return PhotoSize_1.default; }),
        __metadata("design:type", PhotoSize_1.default)
    ], VideoNote.prototype, "thumb", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], VideoNote.prototype, "file_size", void 0);
    VideoNote = __decorate([
        class_transformer_1.Exclude()
    ], VideoNote);
    return VideoNote;
}());
exports.default = VideoNote;
//# sourceMappingURL=VideoNote.js.map