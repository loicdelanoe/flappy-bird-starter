import {Drawable} from "./Drawable";
import {IAnimatable} from "./Types/IAnimatable";
import {settings} from "./settings";

export class Birdie extends Drawable implements IAnimatable {
    private readonly x: number;
    private y: number;
    private readonly width: number;
    private readonly height: number;
    private frame: number;
    private fallSpeed: number;
    private readonly maxFallSpeed: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, x: number, y: number) {
        super(ctx, canvas, sprite);
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.fallSpeed = 1;
        this.maxFallSpeed = 7;
        this.width = 34;
        this.height = 24
    }

    draw(): void {
        this.ctx.drawImage(this.sprite, settings.birdie.frames[this.frame].sx, settings.birdie.frames[this.frame].sy, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    public update() {
        this.frame++;
        if (this.fallSpeed < this.maxFallSpeed) {
            this.fallSpeed += settings.birdie.gravity;
        }

        // Check if Birdie touch the ground
        this.y += this.fallSpeed;
        if (this.y >= this.canvas.height - settings.ground.frame.sh - this.height) {
            this.y = this.canvas.height - settings.ground.frame.sh - this.height;
        }


        if (this.frame === settings.birdie.frames.length) {
            this.frame = 0;
        }
        // this.draw();
    }

}