class Steps {
    constructor(StepsClass) {
        this.steps = document.querySelector(StepsClass)
        this.num = this.steps.querySelectorAll(".steps li")
        this.workItems = this.steps.querySelectorAll(".work_box")
        this.self = this
    }

    clickNum(e) {
        this.num.forEach(el => {
            el.classList.remove("active_step")
        });
        e.target.classList.add("active_step")
        let numClick = parseInt(e.target.getAttribute("data-n-step"))
        let i = 0
        this.workItems.forEach(el => {
            if (i == numClick) {
                el.classList.remove("none")
            } else {
                el.classList.add("none")
            }
            i++
        })
    }
}

function newSteps(StepsClass) {
    let st = new Steps(StepsClass)

    st.num.forEach(el => {
        el.addEventListener("click", (e) => {
            st.self.clickNum(e)
        })
    });

    return st
}

export { newSteps }