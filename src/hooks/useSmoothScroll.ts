export const useSmoothScroll = () => {
    const scrollToSection = (sectionId: string) => {
        const targetElement = document.getElementById(sectionId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return scrollToSection;
};
