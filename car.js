class Car{
  constructor(x,y, width, height){
    this.x=x;
    this.y=y;
    this.widht = width
    this.height=height

    this.constrols = new this.constrols();
    
  }
  draw(ctx){
    ctx.beginPath();
    ctx.rect(
      this.x-this.width/2,
      this.y-this.height/2,
      this.widht,
      this.height
    );
    ctx.fill()
  }
}