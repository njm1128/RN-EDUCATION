// Navigation이 하는 역할: 우리가 만든 screens 안에 3개의 화면을 가져와서 
// stack으로 만들고 -> 외부에서 사용할 수 있게 한다.
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// material은 버튼누르면 색깔이 바뀌는거
// createMaterialTopNavigator

const TabNavigation = createBottomTabNavigator(
    {
        FirstScreen: {
            screen: FirstScreen, // screen은 First야
            navigationOptions: { title: 'Feeds' } // 버튼 제목은 1이야
        },
        SecondScreen: {
            screen: SecondScreen,
            navigationOptions: { title: 'Stories' }     
        },
        ThirdScreen: {
            screen: ThirdScreen,
            navigationOptions: { title: 'User' }
        }
    }, 

    {
        tabBarOptions: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e0e0e0',
                marginBottom: 10
            }
        }
    }
);

export default createAppContainer(TabNavigation);
// 위 내용을 화면에 그려질 수 있도록 만들고 export 시킴.

// 두개의 파라미터를 받음. routes(라우트), NavigationTabRouterConfig (라우터의 설정)
// 라우트: 화면을 연결해주는 역할 (컨트롤러, a 태그를 미리 지정해 놓는 것)

// createAppContainer 역할
// 무언가 데이터를 화면에 그려지는 Component로 만들어주는 역할