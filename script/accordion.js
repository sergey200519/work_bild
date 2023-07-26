class Accordion {
    constructor(accordionСlass) {
        this.accordion = document.querySelector(accordionСlass)
        this.accordionItems = this.accordion.querySelectorAll(".item")
        this.accordionText = this.accordion.querySelectorAll(".text")
        this.self = this
        
        this.hideAll()
    }

    hideAll() {
        this.accordionText.forEach(element => {
            element.style.maxHeight = "0px"
        });
        this.accordionItems.forEach(element => {
            element.classList.remove("question_active")
        });
    }

    clickItem(el) {
        this.hideAll()
        el.classList.add("question_active")
        let item = el.querySelector(".text")
        item.style.maxHeight = `${item.scrollHeight}px` //"fit-content"

    }
}

function newAccordion(accordionСlass) {
    let accordion = new Accordion(accordionСlass)

    accordion.accordionItems.forEach(el => {
        el.addEventListener("click", (e) => {
            accordion.self.clickItem(el)
        })
    });
}

export { newAccordion }
