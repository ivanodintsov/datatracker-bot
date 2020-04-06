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
var MessageEntity_1 = require("./MessageEntity");
var Animation_1 = require("./Animation");
var Game = /** @class */ (function () {
    function Game() {
    }
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Game.prototype, "title", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Game.prototype, "description", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return PhotoSize_1.default; }),
        __metadata("design:type", Array)
    ], Game.prototype, "photo", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Game.prototype, "text", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return MessageEntity_1.default; }),
        __metadata("design:type", Array)
    ], Game.prototype, "text_entities", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Animation_1.default; }),
        __metadata("design:type", Animation_1.default)
    ], Game.prototype, "animation", void 0);
    Game = __decorate([
        class_transformer_1.Exclude()
    ], Game);
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=Game.js.map