const initialState = {
  posts: [
    {
      id: '1',
      title: 'State Management Basics',
      shortDescription: 'Understand how Redux keeps large apps predictable.',
      content: 'Redux introduces a single source of truth for state. In this article we review actions, reducers, and selectors with practical samples.',
      publishedDate: '02-02-2022',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Speeding Up React Apps',
      shortDescription: 'Memoization patterns that keep renders fast.',
      content: 'React’s rendering model is powerful but can be costly. Here we explore memo, useMemo, and list keying techniques.',
      publishedDate: '05-11-2023',
      author: 'Jane Smith'
    },
    {
      id: '3',
      title: 'Designing Accessible UI',
      shortDescription: 'Checklist for inclusive components.',
      content: 'From semantic headings to keyboard traps, we cover the core practices that help every user enjoy your app.',
      publishedDate: '09-07-2024',
      author: 'Alex Nowak'
    },
  ],
};

export default initialState;
