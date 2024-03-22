import {Background} from "./Background";
import {Ground} from "./Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {Birdie} from "./Birdie";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const sprite: HTMLImageElement = new Image();
sprite.src = 'src/resources/sprite.png';

const drawables: IAnimatable[] = [new Background(ctx, canvas, sprite), new Ground(ctx, canvas, sprite), new Birdie(ctx, canvas, sprite, canvas.width / 2 - 12, canvas.height / 2 - 17)];

function animate() {
    drawables.forEach((drawable: IAnimatable) => {
        drawable.draw();
        drawable.update();
    });

    requestAnimationFrame(animate);
}

sprite.addEventListener('load', () => {
    animate();
});

