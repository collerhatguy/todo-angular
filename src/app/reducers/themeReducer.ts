import { createReducer, on } from "@ngrx/store";
import switchTheme from "../actions/themeActions";

export const initialTheme = true

const _themeReducer = createReducer(
    initialTheme,
    on(switchTheme, state => !state)
)

export default _themeReducer; 