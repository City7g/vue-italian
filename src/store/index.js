import { createStore } from 'vuex'
import * as popups from './popups'

export default createStore({
  state: {
    blogCategory: [
      {
        id: 0,
        title: 'Италия',
        value: 'italy',
        img: 'italy.svg',
      },
      {
        id: 1,
        title: 'Язык',
        value: 'language',
        img: 'language.svg',
      },
      {
        id: 2,
        title: 'Обучение',
        value: 'education',
        img: 'education.svg',
      },
    ],
    blogList: [
      {
        id: 0,
        title: '1Ad ipsum mollit duis eiusmod nisi quis ullamco',
        date: '17 октября 2019',
        img: 'post-1.jpg',
        categories: ['italy'],
      },
      {
        id: 1,
        title: '2Ad ipsum mollit duis eiusmod nisi quis ullamco',
        date: '17 октября 2019',
        img: 'post-2.jpg',
        categories: ['italy'],
      },
      {
        id: 2,
        title: '3Ad ipsum mollit duis eiusmod nisi quis ullamco',
        date: '17 октября 2019',
        img: 'post-3.jpg',
        categories: ['education', 'language'],
      },
      {
        id: 3,
        title: '4Ad ipsum mollit duis eiusmod nisi quis ullamco',
        date: '17 октября 2019',
        img: 'post-4.jpg',
        categories: ['language'],
      },
      {
        id: 4,
        title: '5Ad ipsum mollit duis eiusmod nisi quis ullamco',
        date: '17 октября 2019',
        img: 'post-5.jpg',
        categories: ['language', 'italy'],
      },
      {
        id: 5,
        title: '6Ad ipsum mollit duis eiusmod nisi quis ullamco',
        date: '17 октября 2019',
        img: 'post-6.jpg',
        categories: ['language', 'italy', 'education'],
      },
    ],

    grammarList: [
      {
        id: 0,
        title: 'А1 - Начало',
        description: 'Уровень выживания. Необходимый минимум.',
        img: 'm1.svg',
      },
      {
        id: 1,
        title: 'А2 - Общение на бытовые темы.',
        description:
          'Требуется для получения вида на жительство (permesso di soggiorno).',
        img: 'm2.svg',
      },
      {
        id: 2,
        title: 'B1 - Обсуждение серьёзных тем.',
        description:
          'Чтение простых книг. Требуется для получения гражданства.',
        img: 'm3.svg',
      },
      {
        id: 3,
        title: 'В2 -  Заковыристая грамматика.',
        description: 'Требуется для  обучения в университетах.',
        img: 'm4.svg',
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {
    popups,
  },
})
