import { SingleObstacles } from './../interfaces/single-obstacle';

export const playGroundHeight = window.innerHeight;
export const playGroundWidth = 500;
export const frameNumber = 0;
// export const spritePath = '../../assets/img/character1.png'
export const spritePath = '../assets/img/characters-01.png';
export const playerCarSpeed = 5;
export const playerCar = {
	sX: 0,  // Black Viper car
	sY: 0,
	sWidth: 120,
	sHeight: 120,
	width: 120,
	height: 120,
  score:0
};
export const vehicles: SingleObstacles[] = [
	{
		sX: 120, // Green car
		sY: 0,
		sWidth: 120,
		sHeight: 120,
		width: 120,
		height: 120,
	}, {
		sX: 240,  // Black car
		sY: 0,
		sWidth: 120,
		sHeight: 120,
		width: 120,
		height: 120,
	}, {
		sX: 360,  // Yellow car
		sY: 0,
		sWidth: 120,
		sHeight: 120,
		width: 120,
		height: 120,
	}, {
		sX: 0,  // Red car
		sY: 120,
		sWidth: 120,
		sHeight: 120,
		width: 120,
		height: 120,
	}, {
		sX: 120,  // Blue car
		sY: 120,
		sWidth: 120,
		sHeight: 120,
		width: 120,
		height: 120,
	}, {
		sX: 240,  // Red Audi car
		sY: 120,
		sWidth: 120,
		sHeight: 120,
		width: 120,
		height: 120,
	 } 
	// {
	// 	sX: 476,  // Orange car
	// 	sY: 265,
	// 	sWidth: 62,
	// 	sHeight: 135,
	// 	width: 40,
	// 	height: 90,
	// }, {
	// 	sX: 543,  // Texi
	// 	sY: 265,
	// 	sWidth: 64,
	// 	sHeight: 135,
	// 	width: 40,
	// 	height: 90,
	// }, {
	// 	sX: 610,  // Police
	// 	sY: 265,
	// 	sWidth: 64,
	// 	sHeight: 135,
	// 	width: 40,
	// 	height: 90,
	// }, {
	// 	sX: 605,  // Sky Blue truck
	// 	sY: 0,
	// 	sWidth: 80,
	// 	sHeight: 160,
	// 	width: 60,
	// 	height: 120,
	// }, {
	// 	sX: 460,  // Ambulance
	// 	sY: 0,
	// 	sWidth: 75,
	// 	sHeight: 160,
	// 	width: 60,
	// 	height: 120,
	// }, {
	// 	sX: 531,  // MiniVan
	// 	sY: 0,
	// 	sWidth: 70,
	// 	sHeight: 160,
	// 	width: 45,
	// 	height: 140,
	// }, {
	// 	sX: 368,  // Truck
	// 	sY: 0,
	// 	sWidth: 90,
	// 	sHeight: 220,
	// 	width: 60,
	// 	height: 140,
	// }, {
	// 	sX: 190,  // Orange Trailer
	// 	sY: 0,
	// 	sWidth: 70,
	// 	sHeight: 260,
	// 	width: 55,
	// 	height: 200,
	// }, {
	// 	sX: 285,  // Blue Trailer
	// 	sY: 0,
	// 	sWidth: 70,
	// 	sHeight: 260,
	// 	width: 55,
	// 	height: 200,
	// }
];
