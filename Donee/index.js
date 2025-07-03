const trailers = [
"https://www.youtube.com/watch?v=PLl99DlL6b4&pp=ygUUc2hhd3NoYW5rIHJlZGVtcHRpb24%3D",
"https://www.youtube.com/watch?v=UaVTIH8mujA&pp=ygURZ29kZmF0aGVyIHRyYWlsZXLSBwkJwQkBhyohjO8%3D",
"https://www.youtube.com/watch?v=EXeTwQWrcwY&pp=ygUPdGhlIGRhcmsga25pZ2h0",
"https://www.youtube.com/watch?v=F2RnxZnubCM&list=RDF2RnxZnubCM&start_radio=1&pp=ygUHdGl0YW5pY6AHAQ%3D%3D",
"https://www.youtube.com/watch?v=xvszmNXdM4w&pp=ygUQMyBpZGlvdHMgdHJhaWxlcg%3D%3D",
"https://www.youtube.com/watch?v=AX2uz2XYkbo&pp=ygUUdGhlIGZvdW5kZXIgdHJhaWxlciA%3D",
"https://www.youtube.com/watch?v=FrvkCS0ZGPU&pp=ygUNam9icyB0cmFpbGVyIA%3D%3D",
"https://www.youtube.com/watch?v=iszwuX1AK6A&pp=ygUcd29sZiBvZiB3YWxsIHN0cmVldCB0cmFpbGVyIA%3D%3D",
"https://www.youtube.com/watch?v=BjJcYdEOI0k&pp=ygUVdGhlIG5vdGVib29rIHRyYWlsZXIg",
"https://www.youtube.com/watch?v=lB95KLmpLR4&pp=ygUbdGhlIHNvY2lhbCBuZXR3b3JrIHRyYWlsZXIg",


];

const button = document.getElementById("randomBtn");
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random()*trailers.length);
    const url = trailers[randomIndex];
    window.open(url, "_blank");
})

const observer = new IntersectionObserver(entries => {entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
    }
});
});

document.querySelectorAll(".movie").forEach(movie => {observer.observe(movie)
});