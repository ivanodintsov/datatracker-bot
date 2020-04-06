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
var Location_1 = require("./Location");
var Venue = /** @class */ (function () {
    function Venue() {
    }
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Location_1.default; }),
        __metadata("design:type", Location_1.default)
    ], Venue.prototype, "location", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Venue.prototype, "title", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Venue.prototype, "address", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Venue.prototype, "foursquare_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Venue.prototype, "foursquare_type", void 0);
    Venue = __decorate([
        class_transformer_1.Exclude()
    ], Venue);
    return Venue;
}());
exports.default = Venue;
//# sourceMappingURL=Venue.js.map