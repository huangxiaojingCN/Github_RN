export default class NavigatorUtils {
    static resetHomePage(params) {
        const {navigation} = params;
        navigation.navigate("Home")
    }
}
