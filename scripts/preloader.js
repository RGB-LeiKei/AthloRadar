window.addEventListener('load', async () => {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;

    if (document.fonts?.ready) {
        await document.fonts.ready;
    }

    requestAnimationFrame(() => {
        preloader.classList.add('preloader_hidden');
    });
});
