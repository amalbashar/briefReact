import React, { useState } from 'react';

const CalorieNeedsCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState(null);

    const calculateBMR = () => {
        let bmrValue;
        if (gender === 'male') {
            bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        setBmr(Math.round(bmrValue));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateBMR();
    };

    return (
        <>
            <div className="big-deal-area">
                <div className="container">
                    <div className="deal-style-one-items" style={{ backgroundImage: "url(assets/img/shape/4.jpg)" }}>
                        <div className="row align-center">
                            <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                                <div className="deal-thumb">
                                    <img src="/assets/img/illustration/1.png" alt="Image Not Found" />
                                    <img src="/assets/img/illustration/15.png" alt="Image Not Found" />
                                    <img src="/assets/img/illustration/12.png" alt="Image Not Found" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="deal-info">
                                    {/* Input Form */}
                                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                                        <div>
                                            <label>Weight (kg):</label>
                                            <input
                                                type="number"
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                                required
                                                style={{ padding: '10px', fontSize: '16px', width: '100%' }}
                                            />
                                        </div>
                                        <div>
                                            <label>Height (cm):</label>
                                            <input
                                                type="number"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                                required
                                                style={{ padding: '10px', fontSize: '16px', width: '100%' }}
                                            />
                                        </div>
                                        <div>
                                            <label>Age (years):</label>
                                            <input
                                                type="number"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}
                                                required
                                                style={{ padding: '10px', fontSize: '16px', width: '100%' }}
                                            />
                                        </div>
                                        <div>
                                            <label>Gender:</label>
                                            <select
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                                style={{ padding: '10px', fontSize: '16px', width: '100%' }}
                                            >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ marginTop: '20px', padding: '10px 20px' }}
                                        >
                                            Calculate Daily Calorie Needs
                                        </button>
                                    </form>

                                    {/* Display Result */}
                                    {bmr !== null && (
                                        <div style={{ marginTop: '20px' }}>
                                            <h4>BMR (Basal Metabolic Rate): {bmr} calories/day</h4>
                                            <p>
                                                This is the number of calories your body needs to perform basic life-sustaining functions.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalorieNeedsCalculator;
