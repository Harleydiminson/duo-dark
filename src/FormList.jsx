import { useState } from "react";

function FormList() {
    const mainWord = 'hello';
    const [word, setWord] = useState(''); // Хранит строку, введенную пользователем
    const [isValid, setIsValid] = useState(null)
   
    const compareWords = (e) => {
        e.preventDefault(); // Предотвращаем обновление страницы
        setIsValid(mainWord === word)
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={compareWords}>
                <h2>hello</h2>
                <input
                    type="text"
                    placeholder='Enter please word'
                    value={word} // Cвязываем input c coстоянием
                    onChange={(e) => setWord(e.target.value)} //Обновляем состояние при вводе
                    style={{
                        borderColor: isValid === null ? 'black' : isValid ? 'green' : 'red',
                        borderWidth: "5px",
                    }}
                />
                <button type="submit">Compare</button>
            </form>
        </div>
    )
}

export default FormList;