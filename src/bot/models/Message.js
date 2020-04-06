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
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var MessageEntity_1 = require("./MessageEntity");
var User_1 = require("./User");
var Audio_1 = require("./Audio");
var PhotoSize_1 = require("./PhotoSize");
var Document_1 = require("./Document");
var MessageSticker_1 = require("./MessageSticker");
var Video_1 = require("./Video");
var Voice_1 = require("./Voice");
var Game_1 = require("./Game");
var Contact_1 = require("./Contact");
var Location_1 = require("./Location");
var Venue_1 = require("./Venue");
var Invoice_1 = require("./Invoice");
var VideoNote_1 = require("./VideoNote");
var Message = /** @class */ (function () {
    function Message() {
    }
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "message_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "from", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "date", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "chat", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "forward_from", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "forward_from_chat", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "forward_from_message_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "forward_signature", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "forward_date", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "reply_to_message", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "edit_date", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "media_group_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "author_signature", void 0);
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", String)
    ], Message.prototype, "text", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return MessageEntity_1.default; }),
        __metadata("design:type", Array)
    ], Message.prototype, "entities", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return MessageEntity_1.default; }),
        __metadata("design:type", Array)
    ], Message.prototype, "caption_entities", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Audio_1.default; }),
        __metadata("design:type", Audio_1.default)
    ], Message.prototype, "audio", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Document_1.default; }),
        __metadata("design:type", Document_1.default)
    ], Message.prototype, "document", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Game_1.default; }),
        __metadata("design:type", Game_1.default)
    ], Message.prototype, "game", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return PhotoSize_1.default; }),
        __metadata("design:type", Array)
    ], Message.prototype, "photo", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return MessageSticker_1.default; }),
        __metadata("design:type", MessageSticker_1.default)
    ], Message.prototype, "sticker", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Video_1.default; }),
        __metadata("design:type", Video_1.default)
    ], Message.prototype, "video", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Voice_1.default; }),
        __metadata("design:type", Voice_1.default)
    ], Message.prototype, "voice", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return VideoNote_1.default; }),
        __metadata("design:type", VideoNote_1.default)
    ], Message.prototype, "video_note", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "caption", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Contact_1.default; }),
        __metadata("design:type", Contact_1.default)
    ], Message.prototype, "contact", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Location_1.default; }),
        __metadata("design:type", Location_1.default)
    ], Message.prototype, "location", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Venue_1.default; }),
        __metadata("design:type", Venue_1.default)
    ], Message.prototype, "venue", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return User_1.default; }),
        __metadata("design:type", Array)
    ], Message.prototype, "new_chat_members", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return User_1.default; }),
        __metadata("design:type", User_1.default)
    ], Message.prototype, "left_chat_member", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "new_chat_title", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return PhotoSize_1.default; }),
        __metadata("design:type", Array)
    ], Message.prototype, "new_chat_photo", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Boolean; }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "delete_chat_photo", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Boolean; }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "group_chat_created", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Boolean; }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "supergroup_chat_created", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Boolean; }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "channel_chat_created", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "migrate_to_chat_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "migrate_from_chat_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Message.prototype, "pinned_message", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Invoice_1.default; }),
        __metadata("design:type", Invoice_1.default)
    ], Message.prototype, "invoice", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Message.prototype, "connected_website", void 0);
    Message = __decorate([
        class_transformer_1.Exclude()
    ], Message);
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map