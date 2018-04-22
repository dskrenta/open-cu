
const codeToColor = {
  "0": {
    gradient: ['#546de5','#30336b'],
    text: 'white'
  },
  "1": {
    gradient: '#ccc',
    text: '#555'
  },
  "2": {
    gradient: '#888',
    text: '#fff'
  },
  "3": {
    gradient: '#888',
    text: '#fff'
  },
  "4": {
    gradient: '#888',
    text: '#fff'
  },
  "5": {
    gradient: '#888',
    text: '#fff'
  },
  "6": {
    gradient: '#888',
    text: '#fff'
  },
  "7": {
    gradient: '#888',
    text: '#fff'
  },
  "8": {
    gradient: '#888',
    text: '#fff'
  },
  "9": {
    gradient: '#888',
    text: '#fff'
  },
  "10": {
    gradient: '#888',
    text: '#fff'
  },
  "11": {
    gradient: '#888',
    text: '#fff'
  },
  "12": {
    gradient: '#888',
    text: '#fff'
  },
  "13": {
    gradient: '#ccc',
    text: '#555'
  },
  "14": {
    gradient: '#ccc',
    text: '#555'
  },
  "15": {
    gradient: '#ccc',
    text: '#555'
  },
  "16": {
    gradient: '#ccc',
    text: '#555'
  },
  "17": {
    gradient: '#ccc',
    text: '#555'
  },
  "18": {
    gradient: '#ccc',
    text: '#555'
  },
  "19": {
    gradient: '#888',
    text: '#fff'
  },
  "20": {
    gradient: '#888',
    text: '#fff'
  },
  "21": {
    gradient: '#888',
    text: '#fff'
  },
  "22": {
    gradient: ['#49f', '#bcd'],
    text: '#fff'
  },
  "23": {
    gradient: ['#49f', '#bcd'],
    text: '#fff'
  },
  "24": {
    gradient: ['#49f', '#bcd'],
    text: '#fff'
  },
  "25": {
    gradient: ['#49f', '#bcd'],
    text: '#fff'
  },
  "26": {
    gradient: ['#49f', '#bcd'],
    text: '#fff'
  },
  "27": {
    gradient: ['#273c75','#88b'],
    text: '#fff'
  },
  "28": {
    gradient: ['#49f', '#bcd'],
    text: '#fff'
  },
  "29": {
    gradient: ['#273c75','#88b'],
    text: '#fff'
  },
  "30": {
    gradient: ['#49f','#bcd'],
    text: '#fff'
  },
  "31": {
    gradient: ['#273c75','#88b'],
    text: '#fff'
  },
  "32": {
    gradient: ['#49f','#cca','#f6e58d'],
    text: '#fff'
  },
  "33": {
    gradient: ['#273c75','#88b'],
    text: '#fff'
  },
  "34": {
    gradient: ['#49f','#cca','#f6e58d'],
    text: '#fff'
  },
  "35": {
    gradient: '#ccc',
    text: '#555'
  },
  "36": {
    gradient: ['#49f','#cca','#f6e58d'],
    text: '#fff'
  },
  "37": {
    gradient: '#888',
    text: '#fff'
  },
  "38": {
    gradient: '#888',
    text: '#fff'
  },
  "39": {
    gradient: '#888',
    text: '#fff'
  },
  "40": {
    gradient: '#888',
    text: '#fff'
  },
  "41": {
    gradient: '#ccc',
    text: '#555'
  },
  "42": {
    gradient: '#ccc',
    text: '#555'
  },
  "43": {
    gradient: '#ccc',
    text: '#555'
  },
  "44": {
    gradient: ['#49f','#bcd'],
    text: '#fff'
  },
  "45": {
    gradient: '#888',
    text: '#fff'
  },
  "46": {
    gradient: '#ccc',
    text: '#555'
  },
  "47": {
    gradient: '#888',
    text: '#fff'
  },
  "3200": {
    gradient: '#888',
    text: '#fff'
  },
}

export default function getColors(code) {
  return {
    gradient: [...codeToColor[code].gradient, 'white'],
    text: {color: codeToColor[code].text}
  }
} 