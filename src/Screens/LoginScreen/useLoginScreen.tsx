import { useState } from "react";

function useLoginScreen({ navigation, }: any) {
    //@ts-ignore
    const [visible, setVisibility] = useState(true) 
    function navigateToHome() {
        navigation.navigate('Home');
    }
    
    function toggleVisibilty(value: any) {
        value == 'visible' ? setVisibility(visible) : setVisibility(!visible)
    }

    return {
        navigateToHome,
        toggleVisibilty,
        visible
    }
}

export default useLoginScreen;