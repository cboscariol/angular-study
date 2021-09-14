import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() social: any = [
      {
        "logo":"https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
        "name":"Instagran",
        "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, provident. Quaerat quam labore accusamus repudiandae nostrum quasi, a cupiditate debitis ipsa deserunt fuga hic sapiente! Id dolore fugit error rerum?"
      },
      {
        "logo":"https://logopng.com.br/logos/facebook-13.png",
        "name":"Facebook",
        "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, provident. Quaerat quam labore accusamus repudiandae nostrum quasi, a cupiditate debitis ipsa deserunt fuga hic sapiente! Id dolore fugit error rerum?"
      },
      {
        "logo":"https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png",
        "name":"Twitter",
        "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, provident. Quaerat quam labore accusamus repudiandae nostrum quasi, a cupiditate debitis ipsa deserunt fuga hic sapiente! Id dolore fugit error rerum?"
      }
  ]

  title = 'angular-study';

}
