





// ... (previous code)

function Main() {
    // ... (previous code)

    const [isMouseOverArrows, setIsMouseOverArrows] = useState(false);

    const handleMouseEnterArrows = () => {
        setIsMouseOverArrows(true);
    };

    const handleMouseLeaveArrows = () => {
        setIsMouseOverArrows(false);
    };

    return (
        // ... (previous code)
        <div className="red-circle"
            onMouseEnter={handleMouseEnterArrows}
            onMouseLeave={handleMouseLeaveArrows}
            style={{
                position: 'absolute',
                top: '50%',
                left: '2%',
                zIndex: '5',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                backgroundColor: 'red',
                cursor: isMouseOverArrows ? 'pointer' : 'auto',
            }}
        >
            {/* Two little triangles (arrows) */}
            <div className="arrow-up" style={{
                position: 'absolute',
                top: '5%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '0',
                height: '0',
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '8px solid white',
                display: isMouseOverArrows ? 'block' : 'none',
            }}></div>
            <div className="arrow-down" style={{
                position: 'absolute',
                top: '95%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '0',
                height: '0',
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '8px solid white',
                display: isMouseOverArrows ? 'block' : 'none',
            }}></div>
        </div>
        // ... (previous code)
    );
}

export default Main;























