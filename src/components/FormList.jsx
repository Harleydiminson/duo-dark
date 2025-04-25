import { useState } from "react";
import words from "../data/words";
import generateRandomId from "../utils/generateRandomId";

function FormList() {
    const [inputWord, setInputWord] = useState('');
    const [isValid, setIsValid] = useState(null)
    const [randomWord, setRandomWord] = useState(words[generateRandomId(words.length)])
    const next = () => {
        setRandomWord(words[generateRandomId(words.length)])
        setIsValid(null)
        setInputWord('')
    }
    const compareWords = (e) => {
        e.preventDefault();
        setIsValid(randomWord.english === inputWord)
    }
    const borderColor = isValid === null ? 'black' : isValid ? 'green' : 'red'
    console.log(isValid)

    return (
        <div className="form-container">
            <form className="form" onSubmit={compareWords}>
                <h2>German: {randomWord.german}</h2>
                <input
                    type="text"
                    placeholder='Enter English word'
                    value={inputWord}
                    onChange={(e) => setInputWord(e.target.value)}
                    style={{
                        borderColor,
                        borderWidth: borderColor === 'black' ? '2px' : "5px",
                        backgroundColor: isValid === null ? 'white' : isValid ? 'rgba(144, 238, 144, 0.2)' : 'rgba(240, 128, 128, 0.2)'
                    }}
                />
                <button type="submit">Compare</button>
                <div className="btn-navigate">
                    <button
                        type="button"
                        onClick={next}
                    >
                        Next
                    </button>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ad iure incidunt sed nobis soluta, iste suscipit repudiandae natus. Ut.</p>
            </form>
        </div>
    )
}

export default FormList;