import React, { useState } from 'react';
import { Cat } from 'react-kawaii';

const MoodChanger = () => {
    const MoodHappy = () => <Cat size={400} mood="blissful" color="#FDA7DC" />;
    const MoodSad = () => <Cat size={400} mood="sad" color="#FDA7DC" />;

    const [isHappy, setMood] = useState(MoodHappy)

    return (
        <section>
            {isHappy ? <MoodHappy /> : <MoodSad />}
            <button onClick={() => setMood(!isHappy)}>CHANGE MOOD</button>
        </section>
    );
}

export default MoodChanger;