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
var Message_1 = require("./Message");
var Chat = /** @class */ (function () {
    function Chat() {
    }
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Chat.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "type", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "title", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "username", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "first_name", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "last_name", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Boolean; }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "all_members_are_administrators", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "description", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "invite_link", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Message_1.Message; }),
        __metadata("design:type", Message_1.Message)
    ], Chat.prototype, "pinned_message", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Chat.prototype, "sticker_set_name", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Boolean; }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "can_set_sticker_set", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Chat.prototype, "members_count", void 0);
    Chat = __decorate([
        class_transformer_1.Exclude()
    ], Chat);
    return Chat;
}());
exports.Chat = Chat;
exports.default = Chat;
//# sourceMappingURL=Chat.js.map