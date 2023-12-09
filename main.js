var last_position_x,last_position_of_y
var color="red"
var width_of_line=2
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
width=screen.width
new_width=screen.width-70
new_height=screen.height-300

if(width<992){
    canvas.width=new_width
    canvas.height=new_height
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    color=document.getElementById("color").value
    width_of_line=document.getElementById("width_of_line").value
   last_position_x=e.touches[0].clientX-canvas.offsetLeft
   last_position_of_y=e.touches[0].clientY-canvas.offsetTop

}
canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line
    ctx.moveTo(last_position_x,last_position_of_y)
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y)
    ctx.stroke()
    last_position_x=current_position_of_touch_x
    last_position_of_y=current_position_of_touch_y
    }
function clear_Area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}