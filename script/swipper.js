class Swipper {
    constructor(swipperClass) {
        this.swipper = document.querySelector(swipperClass)
        this.i = 1;
        this.n = this.swipper.querySelectorAll(".slide").length
        this.shift = 0
        this.resize_slide(this.swipper)
        let self = this
        setInterval(() => {
            self.next_slide()
        }, 5000)
    }

    resize_slide(sw) {
        document.documentElement.style.setProperty("--width_slide", `${sw.offsetWidth}px`);
    }

    next_slide() {
        if (this.i != this.n) {
            this.shift = this.shift + this.swipper.offsetWidth
            this.swipper.querySelector(".swipper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
            this.i++
        } else {
            this.shift = 0
            this.swipper.querySelector(".swipper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
            this.i = 1
        }
    }
}

function newSwipper(swipperClass) {
    let sw = new Swipper(swipperClass)
    
    window.addEventListener("resize", () => {
        sw.resize_slide(sw.swipper)
    })

    return sw
}

export { newSwipper }