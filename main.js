var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
 fabric.image.fromURL('BirthdayImage.jpg',function(Img){
 block.image.object=Img;
  block_image_object.scaleToWidth(700);
  block_image_object.scaleToHeight(510);
  block_image_object.set({
    
  })
}
)}
function playSound(){
	x.play();
}
