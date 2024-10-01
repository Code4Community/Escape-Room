import Phaser from "phaser";

import skyImage from "../assets/sky.png";
import levelMap from "../levels.js";
import { levelsDefeated } from "./game-scene.js";
export default class LevelSelectScene extends Phaser.Scene {
  constructor() {
    super("LevelSelect");
  }

  preload() {
    
  }

  create() {
    
  }

  update() {}
}

function getLevelText(key, isActive) {
  switch (key) {
    case "LevelOne":
      return isActive ? "Level 1: Genesis" : "Level 1";
    case "LevelTwo":
      return isActive ? "Level 2: Robots!" : "Level 2";
    case "LevelThree":
      return isActive ? "Level 3: Climb The Mountain" : "Level 3";
    case "LevelFour":
      return isActive ? "Level 4: Teamwork" : "Level 4";
    case "LevelFive":
      return isActive ? "Level 5: Magic Carpet" : "Level 5";
    case "LevelSix":
      return isActive ? "Level 6: Across The Gap" : "Level 6";
  }
}
