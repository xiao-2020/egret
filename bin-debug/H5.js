var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var H5 = (function (_super) {
    __extends(H5, _super);
    function H5() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init.bind(_this), _this);
        return _this;
    }
    H5.prototype.init = function () {
        var shp = new egret.Shape();
        shp.x = 100;
        shp.y = 100;
        shp.graphics.lineStyle(10, 0x8b9af6);
        shp.graphics.beginFill(0xff3300);
        shp.graphics.drawCircle(0, 0, 100);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return H5;
}(egret.DisplayObjectContainer));
__reflect(H5.prototype, "H5");
//# sourceMappingURL=H5.js.map