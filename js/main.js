const pictureIdCounter = 25;
const likesMinAmount = 15;
const likesMaxAmount = 200;
const avatarCounter = 6;
const commentsCounter = 8;

const names = [
  'Василий Иванович Дыбда',
  'Kolyasik4219',
  'Натуся - счастливая мамочка двух ангелочков',
  'Sameedha Luthra',
  'Анна Семенова',
  'nogoto4ki_Yerevan',
];

const commentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const pictureDescription = [
  'Стремитесь не к успеху, а к ценностям, которые он дает',
  'Смотрите, какого карася поймал!',
  'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
  'Вот такие пироги!',
  'Надо любить жизнь больше, чем смысл жизни',
  'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно',
  'Начинать всегда стоит с того, что сеет сомнения',
  'Ваше время ограничено, не тратьте его, живя чужой жизнью',
  'Наука — это организованные знания, мудрость — это организованная жизнь',
  'В моем словаре нет слова «невозможно»!',
  'Свобода ничего не стоит, если она не включает в себя свободу ошибаться [Махатма Ганди]',
  'Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы (с)',
  'Лучшая месть – огромный успех',
  'Идите уверенно по направлению к мечте. Живите той жизнью, которую вы сами себе придумали',
  'Лучше быть уверенным в хорошем результате, чем надеяться на отличный',
  'Стоит только поверить, что вы можете – и вы уже на полпути к цели',
  'Научитесь говорить "Я не знаю", и это уже будет прогресс',
  'Упади семь раз и восемь раз поднимись...',
  'У всего есть своя красота, но не каждый может ее увидеть',
  'Когда я освобождаюсь от того, кто я есть, я становлюсь тем, кем я могу быть',
  'Если нет ветра, беритесь за вёсла',
  'Успех — это способность идти от поражения к поражению, не теряя оптимизма',
  'Мы становимся тем, о чем мы думаем',
  'Лучшее время, чтобы посадить дерево, было 20 лет назад. Следующий подходящий момент - сегодня',
  'Неудача – это просто возможность начать снова, но уже более мудро',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = function () {
  let lastGeneratedId = 0;

  return() => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = function () {
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(commentsText)
  ).join(' ');
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, avatarCounter)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(pictureDescription),
  likes: getRandomInteger(likesMinAmount, likesMaxAmount),
  comments: Array.from(
    {length: getRandomInteger(0, commentsCounter)},
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: pictureIdCounter}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
getPictures();
