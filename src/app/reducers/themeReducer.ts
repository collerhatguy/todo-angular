import { createReducer, on } from "@ngrx/store";
import switchTheme from "../actions/themeActions";

export const initialTheme = true

const themeReducer = createReducer(
    initialTheme,
    on(switchTheme, state => !state)
)

export default themeReducer; 