import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsList = [
    {
      title: 'Noticia 1',
      description: 'Judicatura derogó ampliación de periodos de jueces de la Corte Nacional que fue aprobada con los votos de Wilman Terán y Xavier Muñoz',
      image: 'https://www.eluniverso.com/resizer/uG_S0JR9696O5MyVKxYUr89o1Jc=/720x540/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BCPZF3YK75DWVKZ2GCLSOP5LZA.jpg',
    },
    {
      title: 'Noticia 2',
      description: 'Megacárceles de Pastaza y Santa Elena contarán con sistemas inéditos en el país y triple seguridad perimetral',
      image: 'https://www.eluniverso.com/noticias/politica/megacarceles-de-pastaza-y-santa-elena-contaran-con-sistemas-ineditos-en-el-pais-y-triple-seguridad-perimetral-nota/.jpg',
    },
    {
      title: 'Noticia 3',
      description: 'Clases se mantendrán en modalidad no presencial en Ecuador hasta el miércoles, 17 de enero',
      image: 'https://www.eluniverso.com/noticias/ecuador/clases-se-mantendran-en-modalidad-no-presencial-en-ecuador-hasta-el-miercoles-17-de-enero-nota/.jpg',
    },
    {
      title: 'Noticia 4',
      description: 'Policía descartó presunto explosivo en el norte de Quito',
      image: 'https://www.eluniverso.com/noticias/seguridad/policia-descarto-presunto-explosivo-en-el-norte-de-quito-nota/',
    },
  ];
}