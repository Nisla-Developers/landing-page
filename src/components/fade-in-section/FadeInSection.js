import React from 'react';
import './FadeInSection.css';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        // Run Every time
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => setVisible(entry.isIntersecting));
        // });

        // Run Once
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    const getTransition = () =>{
        if(props.side == 'bottom'){
            return 'translateY(10vh)'
        }

        if(props.side == 'top'){
            return 'translateY(-10vh)'
        }

        if(props.side == 'left'){
            return 'translateX(-10vw)'
        }
        if(props.side == 'right'){
            return 'translateX(10vw)'
        }
    }
    return (
        <div
            style={isVisible ? {transform:'none'} : { transform: getTransition() }}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;