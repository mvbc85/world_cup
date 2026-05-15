const fs = require('fs');
const h = fs.readFileSync('fifa_ranking.html', 'utf8');
const markerStart = '<script id="__NEXT_DATA__" type="application/json">';
const s = h.indexOf(markerStart);
if (s === -1) {
  console.log('NO_NEXT_DATA');
  process.exit(0);
}
const start = s + markerStart.length;
const end = h.indexOf('</script>', start);
const jsonText = h.slice(start, end);
const j = JSON.parse(jsonText);
const p = j && j.props && j.props.pageProps ? j.props.pageProps : {};
console.log('pageProps keys:', Object.keys(p));
const str = JSON.stringify(p);
console.log('has ranking hint:', /rankingList|rankingTable|liveRanking|countryName|totalPoints/.test(str));
console.log('countryName occurrences:', (str.match(/countryName/g) || []).length);
for (const k of Object.keys(p)) {
  if (typeof p[k] === 'object' && p[k]) {
    const s2 = JSON.stringify(p[k]);
    if (/countryName|totalPoints|rank/.test(s2)) {
      console.log('possible key with ranking data:', k);
    }
  }
}
