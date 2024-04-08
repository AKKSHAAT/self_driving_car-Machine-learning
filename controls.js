class Controls{
  contructor(){
    this.forward=false;
    this.left=false;
    this.right=false;
    this.reverse=false;
    this.#addKeyboardListners();
  }
  #addKeyboardListners(){
    document.onkeydown=(event)=>{
      switch(event.key){
        case"ArrowLeft":
          this.left=true;
          break;
        case "ArrowRight":
          this.right=true;
          break;
        case "ArrowUp":
          this.forward=true;
          break;
        case "ArrowDown":
          this.reverse=true;
          break;
      }
      console.table(this);
    }

    document.onkeyup=(event)=>{
      switch(event.key){
        case"ArrowLeft":
          this.left=true;
          break;
        case "ArrowRight":
          this.right=true;
          break;
        case "ArrowUp":
          this.forward=true;
          break;
        case "ArrowDown":
          this.reverse=true;
          break;
      }
      console.table(this);
    }
  }
}