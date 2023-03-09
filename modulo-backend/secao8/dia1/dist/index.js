"use strict";
// ./index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ex = __importStar(require("./exercises"));
console.log("A ÁREA DE UM:");
console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);
console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);
console.log("\nO PERÍMETRO DE UM:");
console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);
console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);
console.log(`Calcule a área de um losango que tem D = 32cm e d = 18cm: ${Ex.areaLosango(32, 18)}`);
console.log(`Calcule a área de um losango que tem D = 200cm e d = 50cm: ${Ex.areaLosango(200, 50)}`);
console.log(`Calcule a área de um losango que tem D = 75cm e d = 25cm: ${Ex.areaLosango(75, 25)}`);
console.log(`Área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm: ${Ex.areaTrapezio(100, 70, 50)}`);
console.log(`Área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm: ${Ex.areaTrapezio(75, 50, 35)}`);
console.log(`Área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm: ${Ex.areaTrapezio(150, 120, 80)}`);
console.log(`Calcule a área de um círculo de raio igual 25cm: ${Ex.areaCirculo(25)}`);
console.log(`Calcule a área de um círculo de raio igual 100cm: ${Ex.areaCirculo(100)}`);
console.log(`Calcule a área de um círculo de raio igual 12,5cm: ${Ex.areaCirculo(12.5)}`);
