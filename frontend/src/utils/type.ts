export type PaletteProps = {
    id: number,
    name: string,
    colors:colorProps[],
    nbColor: number,
    selected: boolean,
}

export type palettePropsCreate = {
    name: string,
    nbColor: number,
}

export type colorProps = {
    code: string,
    paletteId: number,
}
