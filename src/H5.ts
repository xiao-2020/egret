

class H5 extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init.bind(this), this)
    }
    init() {
        let shp: egret.Shape = new egret.Shape()
        shp.x = 100
        shp.y = 100
        shp.graphics.lineStyle(10, 0x8b9af6)
        shp.graphics.beginFill(0xff3300)
        shp.graphics.drawCircle(0, 0, 100)
        shp.graphics.endFill()
        this.addChild(shp)
    }
}