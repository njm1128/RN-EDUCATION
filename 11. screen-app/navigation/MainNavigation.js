// TabNavigation(화면 3개) + SignUp 가지고 App으로 가야지 !

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TabNavigation from './TabNavigation';
import SignUp from '../screens/SignUp';
import SignUp2 from '../screens/SignUp2';

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
            // header: 어플리케이션 최상단에 제목 (보통 null로 주고 필요할 때 사용)
        },
        SignUp: {
            screen: SignUp
        },
        SignUp2: {
            screen: SignUp2
        }
    }, // 하단 버튼 3개 가진 탭 네비게이션, SignUp
       // 너가 사용할 탭 설정해주고, 디테일 화면 하나씩 나열 해 !
    
    {
        headerMode: 'screen',
        mode: 'card' // card, modal
    } // 위의 2개 스택들의 설정. 설정은 안넣어도 됨. 
      // hdearMode - screen: 전환되는 것을 기준으로 화면을 바꿔줘
      // card: 옆에서 화면이 들어옴 
      // modal: 하단에서 화면이 올라옴
);
// 스택들, 스택들의 설정

export default createAppContainer(MainNavigation);