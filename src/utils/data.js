const questions = [
  {
    id: 1,
    questionText: 'Apa ibu kota Prancis?',
    options: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Roma', isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: 'Siapa CEO dari Tesla?',
    options: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Mark Zuckerberg', isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: 'Apa ibu kota Indonesia?',
    options: [
      { answerText: 'Jakarta', isCorrect: true },
      { answerText: 'Bali', isCorrect: false },
      { answerText: 'Surabaya', isCorrect: false },
      { answerText: 'Bandung', isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: 'Apa hasil dari 9 + 10?',
    options: [
      { answerText: '19', isCorrect: true },
      { answerText: '21', isCorrect: false },
      { answerText: '20', isCorrect: false },
      { answerText: '18', isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText: 'Siapa penemu bola lampu?',
    options: [
      { answerText: 'Nikola Tesla', isCorrect: false },
      { answerText: 'Thomas Edison', isCorrect: true },
      { answerText: 'Albert Einstein', isCorrect: false },
      { answerText: 'Isaac Newton', isCorrect: false },
    ],
  },
  {
    id: 6,
    questionText: 'Apa gunung tertinggi di dunia?',
    options: [
      { answerText: 'Gunung Kilimanjaro', isCorrect: false },
      { answerText: 'Gunung Everest', isCorrect: true },
      { answerText: 'Gunung Elbrus', isCorrect: false },
      { answerText: 'Gunung Denali', isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: 'Siapa presiden pertama Indonesia?',
    options: [
      { answerText: 'Soekarno', isCorrect: true },
      { answerText: 'Soeharto', isCorrect: false },
      { answerText: 'BJ Habibie', isCorrect: false },
      { answerText: 'Megawati Soekarnoputri', isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText: 'Apa planet terbesar di tata surya?',
    options: [
      { answerText: 'Saturnus', isCorrect: false },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Bumi', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: true },
    ],
  },
  {
    id: 9,
    questionText: 'Apa simbol kimia untuk air?',
    options: [
      { answerText: 'H2O', isCorrect: true },
      { answerText: 'O2', isCorrect: false },
      { answerText: 'CO2', isCorrect: false },
      { answerText: 'NaCl', isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: 'Apa ibu kota Jepang?',
    options: [
      { answerText: 'Tokyo', isCorrect: true },
      { answerText: 'Osaka', isCorrect: false },
      { answerText: 'Kyoto', isCorrect: false },
      { answerText: 'Nagoya', isCorrect: false },
    ],
  },
];

function getQuestion() {
  return questions;
}

export { getQuestion };
