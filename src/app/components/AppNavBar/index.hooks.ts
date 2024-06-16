import React from "react"

export const useTwoColNavBarHooks = () => {
    const [selectedMenu, setSelectedMenu] = React.useState("home");
    const defaultStyle = "cursor-pointer flex h-12 w-auto mx-3 justify-center items-center";
    const selectedStyle = "cursor-pointer flex h-12 w-auto mx-3 border-b-2 border-cyan-500 justify-center items-center"

    return {
        selectedMenu, setSelectedMenu,
        defaultStyle, selectedStyle
    }
}