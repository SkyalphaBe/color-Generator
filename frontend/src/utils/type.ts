export type PaletteProps = {
    id: number,
    name: string,
    colors:colorProps[],
    nbColor: number,
    selected: boolean,
}

export type palettePropsCreate = {
    name: string,
}

export type colorProps = {
    code: string,
    paletteId: number,
}
