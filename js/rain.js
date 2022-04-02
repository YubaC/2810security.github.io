$(document).ready(function() { var h = $("#canvas")[0];
    h.width = window.innerWidth;
    h.height = window.innerHeight; if (h.getContext) { var o = h.getContext("2d"); var v = h.width; var q = h.height;
        o.strokeStyle = "rgba(174,194,224,0.5)";
        o.lineWidth = 1;
        o.lineCap = "round"; var r = []; var s = 1000; for (var a = 0; a < s; a++) { r.push({ x: Math.random() * v, y: Math.random() * q, l: Math.random() * 1, xs: -4 + Math.random() * 4 + 2, ys: Math.random() * 10 + 10 }) } var u = []; for (var b = 0; b < s; b++) { u[b] = r[b] }

        function p() { o.clearRect(0, 0, v, q); for (var c = 0; c < u.length; c++) { var d = u[c];
                o.beginPath();
                o.moveTo(d.x, d.y);
                o.lineTo(d.x + d.l * d.xs, d.y + d.l * d.ys);
                o.stroke() }
            t() }

        function t() { for (var c = 0; c < u.length; c++) { var d = u[c];
                d.x += d.xs;
                d.y += d.ys; if (d.x > v || d.y > q) { d.x = Math.random() * v;
                    d.y = -20 } } }
        setInterval(p, 30) } });