// task 1
// class Circle {
//     r = 0;
//     get radius() {
//         return this.r;
//     }
//     set radius(R) {
//         if (R < 0) {
//             alert("Radius can't be < 0");
//             return;
//         }
//         this.r = R;    
//     }
//     get diameter() {
//         return this.r * 2;
//     }
//     circleArea() {
//         return (Math.PI * Math.pow(this.r, 2)).toFixed(1);
//     }
//     circumference() {
//         return (2 * Math.PI * this.r).toFixed(1);
//     }
//     toString() {
//         return `<div style="background: violet; height:170px; width:170px; border-radius:50%;display: flex; align-items: center;justify-content: center; ">
//             <p style="text-align: center;"> Radius: ${this.r}<br>Diameter: ${this.diameter}<br> Area: ${this.circleArea()}
//                 <br>Circumference: ${this.circumference()}</p> </div>`;
//     }
// }
// let c = new Circle();
// c.radius = 5;
// document.write(c.toString());


// task 2
class HtmlElement {
   constructor(tag, selfClosing = false) {
      this.tag = tag;
      this.selfClosing = selfClosing;
      this.content = "";
      this.attributes = [];
      this.styles = [];
      this.childTags = [];
   }

   setAttr(name, value) {
      this.attributes.push({ name, value });
   }

   setStyle(name, value) {
      this.styles.push({ name, value });
   }

   pushChild(item) {
      if (!this.selfClosing) {
         this.childTags.push(item);
      }
   }
   unshiftChild(item) {
      if (!this.selfClosing) {
         this.childTags.unshift(item);
      }
   }

   getHtml() {
      let attrs = "";
      for (let i = 0; i < this.attributes.length; i++)
         attrs += `${this.attributes[i].name}="${this.attributes[i].value}" `;

      let styles = "";
      for (let i = 0; i < this.styles.length; i++)
         styles += `${this.styles[i].name}: ${this.styles[i].value}; `;

      let startTag = `<${this.tag} ${attrs}${styles ? `style="${styles}"` : ""}>`;
      if (this.selfClosing)
         return startTag.slice(0, -1) + " />";

      let data = "";
      for (let i = 0; i < this.childTags.length; i++) {
         data += this.childTags[i].getHtml();
      }
      data += this.content;
      return `${startTag}${data}</${this.tag}>`;
   }

   setContent = text => {
      if (!this.selfClosing) {
         this.content = text;
      }
   }
}

var obj = new HtmlElement("div");
obj.setAttr("id", "wrapper");
obj.setStyle("display", "flex");

var div = new HtmlElement("div");
div.setStyle("width", "300px");
div.setStyle("margin", "10px");

var h3 = new HtmlElement("h3");
h3.setContent("What is Lorem Ipsum?");
div.pushChild(h3);

var img = new HtmlElement("img", true);
img.setAttr("src", "lipsum.png");
img.setAttr("alt", "Lorem Ipsum");
img.setStyle("width", "100%");
div.pushChild(img);

var p = new HtmlElement("p");
p.setStyle("text-align", "justify");
p.setContent("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
div.pushChild(p);

var a = new HtmlElement("a");
a.setAttr("href", "https://www.lipsum.com/");
a.setAttr("target", "_blank");
a.setContent("More ...");
div.pushChild(a);

obj.pushChild(div);
obj.pushChild(div);

// document.write(obj.getHtml());


// task 3
class CssClass {
   constructor(className) {
      this.className = className;
      this.styles = [];
   }
   setStyle(prop, value) {
      this.styles[prop] = value;
   }
   removeStyle(prop) {
      delete this.styles[prop];
   }
   getCss() {
      let data = "";
      for (let i in this.styles) {
         data += `${i}: ${this.styles[i]};\n`;
      }
      return `.${this.className} {\n${data} }`;
   }
}

let c = new CssClass('test');
c.setStyle('font-size', '1em');
c.setStyle('color', 'white');
c.setStyle('background', 'violet');
c.removeStyle('background');
// document.write(c.getCss());

// task 4

class HtmlBlock {
   constructor() {
      this.styles = [];
      this.rootItem = '';
   }
   setStyle(obj) {
      this.styles.push(obj);
   }
   setRootItem(item) {
      this.rootItem = item;
   }
   getCode() {
      let css = '';
      for (let cssClass of this.styles) {
         css += cssClass.getCss() + "\n";
      }

      let html = this.rootItem ? this.rootItem.getHtml() : '';
      return `<style>\n${css}</style>\n${html}`;
   }
}

let htmlBlock = new HtmlBlock();

let wrap = new CssClass('wrap');
wrap.setStyle('display', 'flex');
htmlBlock.setStyle(wrap);

let block = new CssClass('block');
block.setStyle('width', '300px');
block.setStyle('margin', '10px');
htmlBlock.setStyle(block);

let img_ = new CssClass('img');
img_.setStyle('width', '100%');
htmlBlock.setStyle(img_);

let text = new CssClass('text');
text.setStyle('text-align', 'justify');
htmlBlock.setStyle(text);

let wrapper = new HtmlElement('div');
wrapper.setAttr('id', 'wrapper');
wrapper.setAttr('class', 'wrap');

let div_ = new HtmlElement('div');
div_.setAttr('class', 'block');

let h3_ = new HtmlElement('h3');
h3_.setContent('What is Lorem Ipsum?');
div_.pushChild(h3_);

let image = new HtmlElement('img', true);
image.setAttr('src', 'lipsum.png');
image.setAttr('alt', 'Lorem Ipsum');
image.setAttr('class', 'img');
div_.pushChild(image);

let p_ = new HtmlElement('p');
p_.setAttr('class', 'text');
p_.setContent(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`);
div_.pushChild(p_);

let a_ = new HtmlElement('a');
a_.setAttr('href', 'https://www.lipsum.com/');
a_.setAttr('target', '_blank');
a_.setContent('More ...');
div_.pushChild(a_);

wrapper.pushChild(div_);
wrapper.pushChild(div_);

htmlBlock.setRootItem(wrapper);

document.write(htmlBlock.getCode());
