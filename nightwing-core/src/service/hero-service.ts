
import { IHero } from '../model/hero'

export class HeroService {
  
  static getHeros(): IHero[] {
    return [
      { name: 'Bruce Wayne', alias: 'Batman', skills: ['rich'] },
      { name: 'Clark Kent', alias: 'Superman', skills: ['fly', 'heat vision', 'super strength']}
    ]
  } 

}