import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
    const [weight, setWeight] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    const calculateBmi = async () => {
        try {
            if (weight && height) {
                const response = await axios.post('http://localhost:5000/api/calculate-bmi', {
                    weight,
                    height,
                });

                setBmi(response.data.bmi);
                setError('');
            } else {
                setError('Please enter both weight and height');
            }
        } catch (err) {
            setError('Error calculating BMI');
            console.error(err);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>BMI Calculator</h1>
            <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Height (m)"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
            />
            <button onClick={calculateBmi}>Calculate BMI</button>
            {bmi && <h2>Your BMI: {bmi.toFixed(2)}</h2>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default App;
