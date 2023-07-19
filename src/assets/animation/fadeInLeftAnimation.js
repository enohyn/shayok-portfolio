const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll("animated")[0].classList.add("fadeInLeft")
        }

    })
})
observer.observe(document.querySelector("container"));