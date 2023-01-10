import { Application } from '@pixi/app';
import { Ticker, TickerPlugin } from '@pixi/ticker';
import { InteractionManager } from '@pixi/interaction';
import { Live2DModel } from 'pixi-live2d-display';
import { Renderer } from '@pixi/core';

// 为 Live2DModel 注册 Ticker
// @ts-ignore
Live2DModel.registerTicker(Ticker);

// 为 Application 注册 Ticker
Application.registerPlugin(TickerPlugin);

// 注册 InteractionManager 以支持 Live2D 模型的自动交互
Renderer.registerPlugin('interaction', InteractionManager);

(async function () {
  const app = new Application({
    view: document.getElementById('canvas') as HTMLCanvasElement,
  });

  const model = await Live2DModel.from('/325_1/model.model.json');
  model.scale.set(0.5, 0.5);
  model.position.set(150, 0);

  app.stage.addChild(model);
})();
