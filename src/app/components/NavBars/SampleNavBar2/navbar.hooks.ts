import React from "react";

export const useNavBarHooks = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return {
        showMobileMenu, setShowMobileMenu
    }
}