console.log('Hello World!!!');

var canvas = document.getElementById("myCanvas");

// HTMLCanvasElement.getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings)
// : CanvasRenderingContext2D
// The identifier (ID) of the type of canvas to create. Internet Explorer 9
// and Internet Explorer 10 support only a 2-D context using
// canvas.getContext("2d"); IE11 Preview also supports 3-D or
// WebGL context using canvas.getContext("experimental-webgl");


// Returns an object that provides methods and properties for drawing
// and manipulating images and graphics on a canvas element in a document.
// A context object includes information about colors, line widths, fonts,
// and other graphic parameters that can be drawn on a canvas.

var ctx = canvas.getContext("2d")

// Example code to create a red square 

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();