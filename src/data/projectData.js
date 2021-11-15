import PlugSpotImg from '../img/PlugSpot.jpg'
import AODImg from '../img/AOD.jpg'
import LuxtraderImg from '../img/Luxtrader.jpg'
import TodoListImg from '../img/TODOLIST.jpg'
import Sl1PlugSpot from '../img/PlugSpot/slide-1.jpg'
import Sl2PlugSpot from '../img/PlugSpot/slide-2.jpg'
import Sl3PlugSpot from '../img/PlugSpot/slide-3.jpg'
import Sl4PlugSpot from '../img/PlugSpot/slide-4.jpg'
import Sl5PlugSpot from '../img/PlugSpot/slide-5.jpg'
import Sl6PlugSpot from '../img/PlugSpot/slide-6.jpg'
import Sl1TodoList from '../img/TodoList/slide-1.jpg'
import Sl2TodoList from '../img/TodoList/slide-2.jpg'
import Sl3TodoList from '../img/TodoList/slide-3.jpg'
import Sl4TodoList from '../img/TodoList/slide-4.jpg'
import Sl5TodoList from '../img/TodoList/slide-5.jpg'
import Sl1Luxtrader from '../img/Luxtrader/slide-1.jpg'
import Sl2Luxtrader from '../img/Luxtrader/slide-2.jpg'
import Sl3Luxtrader from '../img/Luxtrader/slide-3.jpg'
import Sl4Luxtrader from '../img/Luxtrader/slide-4.jpg'
import Sl5Luxtrader from '../img/Luxtrader/slide-5.jpg'
import Sl6Luxtrader from '../img/Luxtrader/slide-6.jpg'
import Sl1AOD from '../img/AOD/slide-1.jpg'
import Sl2AOD from '../img/AOD/slide-2.jpg'
import Sl3AOD from '../img/AOD/slide-3.jpg'
import Sl4AOD from '../img/AOD/slide-4.jpg'
import Sl5AOD from '../img/AOD/slide-5.jpg'

export const projects = [
  {
    id: 'plugspot',
    src: PlugSpotImg,
    title: 'PlugSpot',
    text: 'Application for finding charging places',
    gitlink: 'https://github.com/TimTimi4/PlugSpot',
    desc:
      `This application is designed to help people find a place where they can charge their phone.
      My task for this project was to mark up the layout given to me by designer. For this project, html was written with BEM methodology by Yandex. Styles were described with scss and compiled by the prepros program. The JS code was used to operate the burger menu, slider and registration popup.`,
    slides: [Sl1PlugSpot, Sl2PlugSpot, Sl3PlugSpot, Sl4PlugSpot, Sl5PlugSpot, Sl6PlugSpot],
  },
  {
    id: 'todolist',
    src: TodoListImg,
    title: 'TodoList',
    text: 'To do list app',
    gitlink: 'https://github.com/TimTimi4/TODOLIST',
    desc: 'Todolist is a note site. Here you can add new notes, edit them, mark completed and delete unnecessary ones. Creating the site, a native js was used. The Js code is split into modules to adhere to the MVC scheme.',
    slides: [Sl1TodoList, Sl2TodoList, Sl3TodoList, Sl4TodoList, Sl5TodoList],
  },
  {
    id: 'luxtrader',
    src: LuxtraderImg,
    title: 'Luxtrader',
    text: 'Antique auction',
    gitlink: 'https://github.com/TimTimi4/Luxtrader',
    desc: 'This is an site-auction for sale of exclusive items. My task for this project was to mark up the layout given to me by designer. For this project, html was written with BEM methodology by Yandex. The site is adapted for all common permission formats. The JS code was used to operate the burger menu, slider and registration popup.',
    slides: [Sl1Luxtrader, Sl2Luxtrader, Sl3Luxtrader, Sl4Luxtrader, Sl5Luxtrader, Sl6Luxtrader],
  },
  {
    id: 'aod',
    src: AODImg,
    title: 'AOD',
    text: 'Antique bike shop',
    gitlink: 'https://github.com/TimTimi4/AOD',
    desc: 'This is a site-store selling vintage bicycles and spare parts for them. My task for this project was to mark up the layout given to me by designer. The main requirement was full adaptability of the site for any resolution. For this project, html was written with BEM methodology by Yandex. Styles were described with scss and compiled by the prepros program.',
    slides: [Sl1AOD, Sl2AOD, Sl3AOD, Sl4AOD, Sl5AOD],
  },
]
