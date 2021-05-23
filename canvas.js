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

ctx.beginPath(); // creates a new path by emptying the subpath 
ctx.rect(20, 40, 50, 50); // defines a rectangle
ctx.fillStyle = "#FF0000"; // color 
ctx.fill();
ctx.closePath(); // The CanvasRenderingContext2D.closePath() method of the 
                 // Canvas 2D API attempts to add a straight line from the current point to the start of the current sub-path. If the shape has already been closed or has only one point, this function does nothing.

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();