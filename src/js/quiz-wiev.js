export default class {
    constructor() {
        this.container = document.querySelector('.quiz-container');
        this.counter = 0;
        this.isFinal = false;
        this.checkedAnswer = [];
        this.questionsAndAnswers = [
            {
                q: "Na którym z poniższych kontynentów mieszka najwięcej otyłych ludzi?",
                a: "Europa",
                b: "Australia",
                c: "Ameryka północna",
                r: 1
            },
            {
                q: "Nazwa bumerang pochodzi z języka aborygenów (boo-mar-rang) i znaczy:",
                a: "Kij, który wraca",
                b: "Latający nóż",
                c: "Stary kieł słonia",
                r: 0
            },
            {
                q: "Ludzkie DNA jest w 55% tożsame z DNA:",
                a: "Muchy",
                b: "Rozgwiazdy",
                c: "Banana",
                r: 2
            },
            {
                q: "Gdzie znajduje się serce krewetki?",
                a: "W jej głowie",
                b: "W jej odwłoku",
                c: "Krewetki nie mają serca",
                r: 0
            },
            {
                q: "Ferruccio Lamborghini, twórca kultowerj marki Lamborgini, początkowo był:",
                a: "Kowalem",
                b: "Pilotem",
                c: "Producentem ciągników rolniczych",
                r: 2
            },
            {
                q: "Kóre z poniższych zwierząt ma cztery nosy?",
                a: "Małż",
                b: "Ropucha",
                c: "Ślimak",
                r: 2
            },
            {
                q: "Która czynność nie jest zakazana w Chinach?",
                a: "Podróże w czasie",
                b: "Jedzenie maku",
                c: "Przytulanie drzew",
                r: 1
            },
            {
                q: "Których stworzeń, z wymienionych niżej, jest na ziemi najwięcej?",
                a: "Kotów",
                b: "Ludzi",
                c: "Kurczaków",
                r: 2
            },
            {
                q: "W XVII-wiecznej Holandii rekordowe ceny, będące odpowiednikiem dzisiejszych 2 tysięcy dolarów, osiągał:",
                a: "Kilogram cukru",
                b: "Kwiat tulipana",
                c: "Pies rasy buldog",
                r: 1
            },
            {
                q: "Która z poniższych substancji może być stosowana jako osocze krwi?",
                a: "Woda kokosowa",
                b: "Białko jajka",
                c: "Krowia ślina",
                r: 0
            },
            {
                q: "Najwyższy szczyt Malediwów ma:",
                a: "5,1 metra",
                b: "13,2 metra",
                c: "1,5 metra",
                r: 0
            },
            {
                q: "Ile procent ludzi jest leworęczna?",
                a: "2%",
                b: "9%",
                c: "13%",
                r: 1
            },
            {
                q: "Jak smakuje smażony pająk?",
                a: "Jak kurczak z rybą",
                b: "Jak orzech laskowy",
                c: "Jak pieczony ziemniak",
                r: 0
            },
            {
                q: "Ile mięśni człowiek musi zaangażować do zmarszczenia brwi?",
                a: "1",
                b: "11",
                c: "42",
                r: 2
            },
            {
                q: "Skąd się wziął napis HOLLYWOOD w Los Angeles?",
                a: "Od fabryki opon stworzonej przez Marvina Holly'ego i Boba Wodd'a",
                b: "Był reklamą domów wznoszonych powyżej (pierwotnie HOLLYWOODLAND)",
                c: "Ostrzegał paralotniarzy o terenie porośniętym ostrokrzewem (holly wood - drewno ostrokrzewu)",
                r: 1
            }
        ]
    }
    firstWiev() {
        const btn = document.createElement('button');
        btn.classList.add('quiz__btn');
        btn.classList.add('quiz__btn--hover');
        btn.textContent = 'Rozpocznij Quiz';
        btn.style.marginBottom = '15px';
        this.container.appendChild(btn);
        btn.addEventListener('click', () => {
            this.changeContent();
        });
    }

    changeContent() {
        this.container.style.opacity = '0';
        setTimeout(() => {
            this.container.style.backgroundColor = 'white';
            this.container.innerHTML = '';
            this.viewContent();
            this.choose();
        }, 300);
    }

    viewContent() {
        const h1 = document.createElement('h1');
        h1.classList.add('quiz__h1');
        h1.textContent = this.questionsAndAnswers[this.counter].q;
        this.container.appendChild(h1);
        let answerArray = [];
        for (let key in this.questionsAndAnswers[this.counter]) {
            answerArray.push(this.questionsAndAnswers[this.counter][key]);
        }
        for (let i = 0; i < 3; i++) {
            let answerDiv = document.createElement('div');
            answerDiv.classList.add('quiz__answear-div');
            if (!this.isFinal) answerDiv.classList.add('quiz__answear-div--hover');
            if (i === 2) {
                answerDiv.classList.add('quiz__answear-div--last');
                if (this.isFinal) {
                    answerDiv.style.marginBottom = '12%';
                }
            }
            this.container.appendChild(answerDiv);
            const checkbox = document.createElement('div');
            checkbox.classList.add('quiz__checkbox');
            answerDiv.appendChild(checkbox);
            const p = document.createElement('p');
            p.classList.add('quiz__answear');
            p.textContent = answerArray[i + 1];
            answerDiv.appendChild(p);
            if (this.isFinal) {
                answerDiv.style.cursor = 'default';
                if (i === this.questionsAndAnswers[this.counter].r) {
                    answerDiv.style.backgroundColor = 'rgb(40, 167, 40)';
                    checkbox.style.background = 'white';
                    checkbox.innerHTML = `<i class="fas fa-check">`;
                } else if (i === this.checkedAnswer[this.counter]) {
                    answerDiv.style.backgroundColor = 'rgb(255, 33, 33)';
                    checkbox.style.background = 'white';
                    checkbox.innerHTML = `<i class="fas fa-times">`;
                }
            }
        }

        this.container.style.opacity = '1';
        if (!this.isFinal) {
            this.btn = document.createElement('button');
            this.btn.classList.add('quiz__btn');
            this.btn.disabled = true;
            this.btn.style.border = '2px solid #aaa'
            this.counter < this.questionsAndAnswers.length - 1 ? this.btn.textContent = 'Następne pytanie' : this.btn.textContent = 'Sprawdź wynik';
            this.container.appendChild(this.btn);

            let numberOfQuestion = document.createElement('p');
            numberOfQuestion.classList.add('quiz__number');
            numberOfQuestion.innerHTML = `<span>${this.counter + 1}</span>/<span>${this.questionsAndAnswers.length}</span>`;
            this.container.appendChild(numberOfQuestion);
        }
    }

    choose() {
        this.counter++;
        let checkedAnswer = null;
        document.querySelectorAll('.quiz__answear-div').forEach((e, index) => {
            e.addEventListener('click', () => {
                document.querySelectorAll('.quiz__checkbox').forEach(e => e.innerHTML = '');
                e.childNodes[0].innerHTML = `<i class="fas fa-check">`;
                this.btn.disabled = false;
                this.btn.style.border = '2px solid black';
                this.btn.classList.add('quiz__btn--hover');
                checkedAnswer = index;
            })
        });
        this.btn.addEventListener('click', () => {
            this.checkedAnswer.push(checkedAnswer);
            if (this.counter < this.questionsAndAnswers.length) {
                this.changeContent();
            } else {
                this.isFinal = true;
                this.showResults();
            }
        })
    }

    wievResults() {
        let resultCounter = 0;
        for (let i = 0; i < this.questionsAndAnswers.length; i++) {
            if (this.questionsAndAnswers[i].r === this.checkedAnswer[i]) {
                resultCounter++;
            }
        }
        let result = ((resultCounter / this.questionsAndAnswers.length) * 100).toFixed();
        let h1 = document.createElement('h1');
        h1.classList.add('correct-h1');
        h1.innerHTML = `Poprawne odpowiedzi: <span>${result}</span>%`;
        this.container.appendChild(h1)
    }

    showResults() {
        this.counter = 0;
        this.container.innerHTML = '';
        this.container.style.top = '40px';
        this.container.style.transform = 'translate(-50%,0)';
        this.container.style.opacity = '0';
        setTimeout(() => {
            this.container.style.opacity = '1';
            this.wievResults();
            for (let i = 0; i < this.questionsAndAnswers.length; i++) {
                this.viewContent();
                this.counter++;
            }
        }, 300);
    }
}
