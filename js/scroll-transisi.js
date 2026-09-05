if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
}
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    const kurangiAnimasi = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (kurangiAnimasi) return;

    const panels = gsap.utils.toArray(".scroll-panel");
    if (panels.length < 2) return;

    const beranda = panels[0];
    const tentang = panels[1];

    beranda.style.zIndex = 1;
    tentang.style.zIndex = 2;

    const patokanScroll = {
        trigger: beranda,
        start: "top top",
        endTrigger: tentang,
        end: "top top",
        scrub: 0.6,
    };

    ScrollTrigger.create({
        ...patokanScroll,
        pin: true,
        pinSpacing: false,
    });

    gsap.timeline({
        scrollTrigger: patokanScroll
    })
    .fromTo(beranda,
        { scale: 1, filter: "brightness(1) saturate(1)" },
        { scale: 0.92, filter: "brightness(0.55) saturate(0.85)", borderRadius: "28px", ease: "none" },
        0
    )
    .fromTo(tentang,
        { scale: 1.04 },
        { scale: 1, ease: "none" },
        0
    );

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
});
