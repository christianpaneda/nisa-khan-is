// this is the data for holding which page we're on
let pageNumber = 0

// content for pages
const pages = [
  { copy: "Ann Arbor-based data journalist", background: "#edc7a9", circle: "#3e78ed"},
  { copy: "Fiona Apple's biggest fan", background: "#a1fffe", circle: "#e34a47" },
  { copy: "works at Michigan Radio", background: "#d3c7f3", circle: "#f7fe00"},
  { copy: 'very fun and informative on <a href="https://twitter.com/mnisakhan" target="blank"> Twitter </a>', background: "#faffb8", circle: "#b472e6"}
]


// pick the relevant tags 
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

const next = function(){
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1){
    pageNumber = 0
  }

  updateSection()

}

const previous = function(){
  pageNumber = pageNumber - 1

  if (pageNumber < 0){
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide
const random = function(){
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

const updateSection = function(){
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener("click", function(){
  next()

})

previousTag.addEventListener("click", function(){
  previous()
})

randomTag.addEventListener("click", function(){
  random()
})

// when a user presses a key, check for arrow left or right
// and to next / prev correctly 
document.addEventListener("keyup", function(event){
  console.log(event)

  // if key being pressed is ArrowRight
  if (event.key == "ArrowRight"){ next()
  }

  if (event.key == "ArrowLeft")
  { previous()
  }

  if (event.key == " ")
  { random()
  }

})

