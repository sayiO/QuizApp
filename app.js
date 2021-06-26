const quizData = [{
        question: 'How old is man utd?'
        a: '100 years',
        b: '95 years',
        c: '20 years',
        d: '35 years'
    }, {
        question: 'Who is the all time goalscorer at Man Utd?',
        a: 'Rio Ferdinand',
        b: 'Ruud van Nisteroy',
        c: 'Wayne Rooney',
        d: 'Bobby Charlton'

    },
    {
        question: "What capacity is Old Trafford Stadium?",
        a: '68 000',
        b: '45 000',
        c: '94 000',
        d: '75 000'
    },
    {
        question: 'Who was the longest serving manager for Manchester United?'
        a: 'Sir Alex Ferguson',
        b: 'Jose Mourhino',
        c: 'David Moyes',
        d: 'Ole Gunner Solskaer'

    },
    {
        question: 'How many champions league did Man Utd win?'
        a: '5',
        b: '2',
        c: '3',
        d: '4'
    }
];


const questionE1 = document.getElelmentById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');












let currentQuestion = 0;
loadQuiz();




function loadQuiz() {
    currentQuestion++
}