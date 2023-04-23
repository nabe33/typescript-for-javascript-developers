import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response: any) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = response.data;
  data = [
    {
      id: 100,
      title: 'new title',
      description: 'new description',
    },
  ];
  console.log(data);
});
