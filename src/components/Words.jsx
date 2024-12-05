import words from '../data/words';

function Words() {
    return(
        <div>
            {words.map((word) =>{
                return<h1 key={word.id}>{word.german}</h1>
            })}
        </div>
    );
}

export default Words;