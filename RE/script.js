var txtRotate = function(el, toRotate, period) {
    this.el = el;
    this.loopNum = 0;
    this.txt = '';
    this.toRotate = toRotate;
    this.isDeleting = false;
    this.period = parseInt(period, 10) || 2000;
    this.tick();
};

txtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 200;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};5

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new txtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #000; padding: 0 10px; }";
    document.body.appendChild(css);
};

$(document).ready(function() {

  var images = [ 'flood.png', 'earthquake.png', 'smog.png', 'drought.png' ];
  
  var random = Math.floor(Math.random() * images.length);

  $('body').css('background-image', 'url(' + images[random] + ')');
});



