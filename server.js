const WGS84Util = require('wgs84-util')

const origoLL = [ 59.875155047865434, 19.396362304687496 ]
const turkuLL = [ 60.44638185995603, 22.2528076171875 ]

const origoUTM = WGS84Util.LLtoUTM({ "coordinates": origoLL.reverse() })
const turkuUTM = WGS84Util.LLtoUTM({ "coordinates": turkuLL.reverse() })

const toImgScale = (coordinates) => {
  const xFactor = 0.00035
  const yFactor = 0.00035
  return [
    xFactor * (coordinates[0] - origoUTM.geometry.coordinates[0]),
    yFactor * (coordinates[1] - origoUTM.geometry.coordinates[1]),
  ]
}

console.log('origo', origoUTM)
console.log('Turku', turkuUTM)

console.log(toImgScale(turkuUTM.geometry.coordinates))