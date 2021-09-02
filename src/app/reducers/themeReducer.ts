import { createReducer, on } from "@ngrx/store";
import switchTheme from "../actions/themeActions";

export const initialTheme = "dark"

const themeReducer = createReducer(
    initialTheme,
    on(switchTheme, state => state === "dark" ? "light" : "dark")
)

export default themeReducer; 