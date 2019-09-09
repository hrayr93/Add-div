class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(text) {
        let newDiv = document.createElement("div");
        newDiv.textContent = text;
        newDiv.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        document.body.appendChild(newDiv);
    }
}

let box = new Options( 100 ,120 , "red" , 50 , "center" );
let item = new Options(300,300, "gray",120, "center");
box.createDiv("red");
item.createDiv("gray");

