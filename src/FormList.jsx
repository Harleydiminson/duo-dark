import { useState } from "react";
import Words from './components/Words';


function FormList() {
    const mainWord = 'hello';
    const [word, setWord] = useState(''); // Хранит строку, введенную пользователем
    const [isValid, setIsValid] = useState(null)

    const compareWords = (e) => {
        e.preventDefault(); // Предотвращаем обновление страницы
        setIsValid(mainWord === word)
    }
    const borderColor = isValid === null ? 'black' : isValid ? 'green' : 'red'

    return (
        <div className="form-container">
            <form className="form" onSubmit={compareWords}>
                <h2>{<Words />}</h2>
                <input
                    type="text"
                    placeholder='Enter please word'
                    value={word} // Cвязываем input c coстоянием
                    onChange={(e) => setWord(e.target.value)} //Обновляем состояние при вводе
                    style={{
                        borderColor,
                        borderWidth: borderColor === 'black' ? '2px' : "5px",
                    }}
                />
                <button type="submit">Compare</button>
                <div className="btn-navigate">
                    <button>Back</button>
                    <button>Next</button>
                </div>
            </form>
        </div>
    )
}

export default FormList;