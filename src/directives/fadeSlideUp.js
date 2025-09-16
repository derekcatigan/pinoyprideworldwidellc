// src\directives\fadeSlideUp.js
export default {
    mounted(el, binding) {
        el.classList.add("fade-slide-up");

        if (binding.value) {
            el.style.animationDelay = `${binding.value}ms`;
            el.style.transitionDelay = `${binding.value}ms`;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add("show");
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
    },
};
