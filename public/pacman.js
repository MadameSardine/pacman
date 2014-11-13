function Pacman(id) {
  this.id = id;
  this.width = 500;
  this.height = 500;
  this.radius = 10;
  this.clearance = this.radius * 2;
  this.speed = 5;
}

Pacman.prototype.render = function(context, status) {
  context.beginPath();
  if (status.direction === 'right') {
    context.arc(status.x, status.y, 20, 
      (Math.PI / 180) * status.mouthOpenValue, 
      (Math.PI / 180) * (360 - status.mouthOpenValue));
  }
  else if (status.direction === 'left'){
    context.arc(status.x, status.y, 20,
      (Math.PI / 180) * (179 - status.mouthOpenValue), //to stop flicker dont draw 180 to 180
      (Math.PI / 180) * (180 + status.mouthOpenValue), true); 
  }
  else if (status.direction === 'up'){
    context.arc(status.x, status.y, 20,
      (Math.PI / 180) * (269 - status.mouthOpenValue),
      (Math.PI / 180) * (270 + status.mouthOpenValue), true); 
  }
  else {
    context.arc(status.x, status.y, 20,
      (Math.PI / 180) * (89 - status.mouthOpenValue),
      (Math.PI / 180) * (90 + status.mouthOpenValue), true); 
  }

  context.lineTo(status.x, status.y);
  context.fillStyle = '#000';
  context.fill();
}
