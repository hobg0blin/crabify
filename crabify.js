// copied from https://stackoverflow.com/questions/2579666/getelementsbytagname-equivalent-for-textnodes
function crabify_text() {
    var walker = document.createTreeWalker(
        document.body, 
        NodeFilter.SHOW_TEXT, 
        null, 
        false
    );

    var node;
    var textNodes = [];

    while(node = walker.nextNode()) {
      let len = node.length
      let newText = "🦀".repeat(len) 
      if (node.nodeType == 3 && node.nodeValue.trim() !== "") {
      // setting timeout didn't really woork for delaying crabify
        walker.currentNode.nodeValue = newText
      }
    }
}
  const images = document.querySelectorAll("img").forEach(img => {
    console.log('img: ', img)
    img.src = "https://cdn.ebaumsworld.com/mediaFiles/picture/19242/81111240.jpg"
  })
  crabify_text()
