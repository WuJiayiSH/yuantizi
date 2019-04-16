var fontCarrier = require('font-carrier')
var fs = require('fs')
//创建空白字体对象
// var font = fontCarrier.create()

var font = fontCarrier.transfer('./GenJyuuGothicX-Bold_Base.ttf')
// font.setSvg('我',fs.readFileSync('./gb2312/我.svg').toString())

var letters = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝ"
letters = letters + "゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ"
letters = letters + "ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ"
for(var i = 0;i < letters.length; i++)
{
    var svg = fs.readFileSync('./kanaR/' +letters.charCodeAt(i).toString(16) +'.svg').toString()
    // font.setSvg(letters[i],svg)
    svg = svg.replace('viewBox="0 0 100 100"', 'viewBox="0 7 100 100"')
    font.setSvg(letters[i],svg)
}

font.output({
  path:'./test3'
})
