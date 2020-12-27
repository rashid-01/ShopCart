function useWelcomeScreen({ navigation }:any) {
    function navigateToLogin() {
        navigation.navigate('Login');
    }
    return {navigateToLogin}
}

export default useWelcomeScreen;