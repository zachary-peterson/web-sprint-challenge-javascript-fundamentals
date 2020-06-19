// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidTwo{
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
    volume(){
    return this.length * this.width * this.height;
    }   
    surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboidT = new CuboidTwo(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboidT.volume()); // 100
console.log(cuboidT.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidTwo{
    constructor(length, width, height){
        super(length, width, height)
    }
    cubeVol(){
        return Math.pow(this.length, 3);
    }
    cubeSurf(){
        return 6 * (Math.pow(this.length, 2));
    }
}

const cube = new CubeMaker(5, 5, 5);

console.log(cube.cubeVol());
console.log(cube.cubeSurf());