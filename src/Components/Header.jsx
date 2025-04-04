import {useEffect} from "react";

function Header() {
    useEffect(() => {
        
        // document.querySelectorAll("*").forEach((el) => {
        //     el.classList.add("hidden");
        // })
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entries.forEach((entry) => {
                    console.log('Observed element:', entry.target);
                });

                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    },);
        

    return (
        <header className="hidden" id="top">
            <h1>My Portfolio</h1>
        </header>
    );
}

export default Header