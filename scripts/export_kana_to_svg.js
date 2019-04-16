var fontCarrier = require('font-carrier')

//创建空白字体对象
var font = fontCarrier.create()

//从其他字体解析
// var transFont = fontCarrier.transfer('./NotoSansCJKsc-Bold.otf')


// var letters = 
var fs = require("fs");
// var svg = transFont.getSvg('我')
var letters = ""
console.log(letters.length)
var transFont = fontCarrier.transfer('./NotoSansCJKjp-Bold_fc_70_020.otf')
// var svg = transFont.getSvg('送')
    
for(var i = 0;i < letters.length; i++)
{
    // var svg = transFont.getSvg(letters[i])
 
 
    // fs.writeFile('./kanji2136/' + letters.charCodeAt(i).toString(16) +".svg",svg) 
}
// var svg = transFont.getSvg("叱")
//     console.log("叱".charCodeAt(0).toString(16))
    
//     fs.writeFile('./kanji2136/' + "叱".charCodeAt(0).toString(16) +".svg",svg) 



letters = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝ"
letters = letters + "゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ"
letters = letters + "ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ"

for(var i = 0;i < letters.length; i++)
{
    var svg = transFont.getSvg(letters[i])
    
    
    fs.writeFile('./kana/' + letters.charCodeAt(i).toString(16) +".svg",svg) 
}

