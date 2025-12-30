function Portfolio({ cash }) {
    return (
        <h2 className="text-2xl">Current Balance: ${cash.toFixed(2)}</h2>
    );
}

export default Portfolio;