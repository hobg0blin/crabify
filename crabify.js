const crab_emojis = ["🐬", "🐟","🐠","🐡"," 🦈"," 🐚", "🦞"]
const crab_images = ["https://cdn.ebaumsworld.com/mediaFiles/picture/19242/81111240.jpg","https://i.pinimg.com/736x/69/50/f1/6950f1fb66a2d2bfb7e1ea537437b16e.jpg","https://i.redd.it/ul854tabj3v51.jpg", "https://external-preview.redd.it/goOSz2FfthgWK4xzaPnfvXWDAUl2gbdWDNSYQ1PMVew.jpg?auto=webp&s=7aa1c2a1061ac555bfbe8fad047e25bd068c2561", "https://i.pinimg.com/736x/52/32/18/52321809f5f5215a3ce54725bb82c85e.jpg", " https://i.kym-cdn.com/photos/images/original/001/021/841/d00.jpg", "https://media.istockphoto.com/id/491208949/photo/cancer.jpg?s=612x612&w=0&k=20&c=xlhszMCS0ICkPe0KXXWd42ai2PruwXiPjMS_614OnKU=", "https://i.pinimg.com/originals/19/13/65/1913656205e43d964ecb2c2c0f2c1819.jpg", "https://cdn.openart.ai/uploads/image_random_jtjXgdFN_1667576548033_1024.webp"]
const crab_rave = document.createRange().createContextualFragment('<iframe width="560" height="315" src="https://www.youtube.com/embed/-50NdPawLVY?si=0eA_fRvnKsRXcMly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}
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
      if (node.nodeType == 3 && node.nodeValue.trim() !== "") {
      // setting timeout didn't really woork for delaying crabify
      let newText = ""
        for (let i = 0; i < len; i++) {
          if (walker.currentNode.nodeValue[i] != " ") {
        let rand_switch = Math.random()
            let char = rand_switch > 0.5 ? get_random(crab_emojis) :"🦀"

          newText  += char
          } else {
            newText += " "
          }
        }
              walker.currentNode.nodeValue = newText
      }
    }
}
  const images = document.querySelectorAll("img").forEach(img => {
    img.src = get_random(crab_images)
  })
  const videos = document.querySelectorAll("video").forEach(vid => {
    let container = document.createElement("div")
    container.appendChild(crab_rave)
    vid.replaceWith(container)
  })
let rave = new Audio('files/crab_rave.opus')
  rave.play()
//setInterval(crabify_text(), 1000)
