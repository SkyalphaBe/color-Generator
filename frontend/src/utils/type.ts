export type PaletteProps = {
    id: number,
    name: String,
    nbColor: number,
    selected: boolean,
}

export type palettePropsCreate = {
    name: String,
    nbColor: number,
}

export type colorProps = {
    code: String,
    paletteId: number,
}
