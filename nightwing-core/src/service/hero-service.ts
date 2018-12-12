
import { IHero } from '../model/hero'

export class HeroService {
  
  static GetHeros(): IHero[] {
    return [
      { name: 'Batman', alias: 'Bruce Wayne', skills: ['rich'] },
      { name: 'Superman', alias: 'Clark Kent', skills: ['fly', 'heat vision', 'super strength']}
    ]
  } 

}