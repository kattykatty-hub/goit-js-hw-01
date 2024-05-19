function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content)
    const paddingWidth = parseFloat(padding)
    const borderWidth = parseFloat(border)

    // Розрахунок загальної ширини елемента з урахуванням box-sizing: border-box
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth
    return Math.round(totalWidth)
}

 console.log(getElementWidth("50px", "8px", "4px")); // 74
