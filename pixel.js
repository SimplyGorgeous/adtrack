var dsp = document.getElementById("dsplink");
var hon = dsp.getAttribute("hong");
var keys = document.getElementById("ads__placement__master__cadn");
var cli = document.body.clientHeight;
var wt = 0, en = 0, jq = 0, wad = 111111;

try {
    wt = Object.keys(window.top).length;
} catch (e) {
    wt = 111111;
}
var dn = "";
try {
    dn = window.top.document.getElementsByTagName("div").length;
} catch (e) {
    dn = 111111;
}
try {
    en = window.top.performance.getEntries().length;
} catch (e) {
    en = 111111;
}
var wid = 0;
try {
    wid = window.screen.width;
} catch (e) {
    wid = 111111;
}
if (!keys && en > 40) {
var rc = "https://managercampaign.com/pixel?" + hon + "&wt=" + wt + "&en=" + en + "&cli=" + cli
    + "&wid=" + wid + "&wad=" + wad + "&dn=" + dn;
var sri = document.createElement('script');
sri.setAttribute("src", encodeURI(rc));
document.head.appendChild(sri);
}