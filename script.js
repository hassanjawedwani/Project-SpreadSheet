const sum = nums => nums.reduce((acc, el)=> acc+el, 0);
const isEven = num => num % 2 === 0 ? true : false;
const average = nums => sum(nums) / nums.length;
const median = nums => {
    const sorted = nums.slice().sort((a, b)=> (a-b));
    const middle = sorted.length / 2 -1;
    return isEven(sorted) 
           ? average([sorted[middle], sorted[middle+1]])
           : sorted[Math.ceil(middle)];
}


const spreadsheetFunctions = {
    sum,
    average,
    median,
};


const container = document.getElementById('container');

const numberToArray = (start, end) => {
    return Array(end-start+1).fill(start).map((elem, index) => elem + index);
}

const charToArray = (start, end) => {
    return numberToArray(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));
}

const createLabel = letter => {
    const label = document.createElement('div');
    label.textContent = letter;
    label.className = 'label';
    container.appendChild(label);

}

window.onload = () => {
    const lettersArray = charToArray('A', 'J');
    lettersArray.map(letter => {
        createLabel(letter);
    })
    const numbersArray = numberToArray(1, 99);
    numbersArray.map(number => {
        createLabel(number);
        lettersArray.map(letter => {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = letter + number;
            input.ariaLabel = letter + number;
            input.onchange = update;
            container.appendChild(input);
        })
    })
}

const update = event => {
    const element = event.target;
    const value = element.value.replace(/\s/g, "");
    if (!value.includes(element.id) && value[0] === "=") {
        
    }
}