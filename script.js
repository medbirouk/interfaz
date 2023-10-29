const scrollButton = document.getElementById("scrollToFixtures")
const fixtures = document.getElementById("fixtures")

scrollButton.addEventListener("click", function(){

    fixtures.scrollIntoView({behavior: "smooth"})

})