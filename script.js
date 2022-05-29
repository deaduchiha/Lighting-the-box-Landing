pos = 0;
var r;
function play() {
  r = setInterval("go_right()", 3000);
}
function pause() {
  clearInterval(r);
}
play();
slideshow.onmouseover = function () {
  pause();
};
slideshow.onmouseout = function () {
  play();
};
right.onclick = go_right;
function go_right() {
  if (pos > -700) {
    pos = pos - 100;
    gallery.style.left = pos + "%";
  } else if (pos == -700) {
    pos = 0;
    gallery.style.left = pos + "%";
  }
}
left.onclick = function () {
  if (pos < 0) {
    pos = pos + 100;
    gallery.style.left = pos + "%";
  } else {
    pos = -700;
    gallery.style.left = pos + "%";
  }
};

pos1 = 0;
right1.onclick = function () {
  if (pos1 > -101.2) {
    pos1 = pos1 - 101.2;
    gallery1.style.left = pos1 + "%";
  } else if (pos1 == -101.2) {
    pos1 = 0;
    gallery1.style.left = pos1 + "%";
  }
};
left1.onclick = function () {
  if (pos1 < 0) {
    pos1 = pos1 + 101.2;
    gallery1.style.left = pos1 + "%";
  } else {
    pos1 = -101.2;
    gallery1.style.left = pos1 + "%";
  }
};
