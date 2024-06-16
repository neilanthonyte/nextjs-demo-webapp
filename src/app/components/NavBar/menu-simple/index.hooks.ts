import React from "react"

export const useSimpleMenuHooks = () => {
    const [selectedMenu, setSelectedMenu] = React.useState("");
    const defaultStyle = "cursor-pointer text-sm hover:underline hover:font-black hover:text-lg";
    const selectedStyle = "cursor-pointer underline font-black text-lg"

    return {
        selectedMenu, setSelectedMenu,
        defaultStyle, selectedStyle
    }
}