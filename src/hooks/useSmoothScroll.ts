export const useSmoothScroll = () => {
    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(sectionId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    };

    return scrollToSection;
};
