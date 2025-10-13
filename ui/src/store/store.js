import { configureStore } from '@reduxjs/toolkit'
import { promoReducer } from './promoSlice'
import { pizzaReducer } from './pizzaSlice'
import { burgerReducer } from './burgerSlice'
import { rollsReducer } from './rollsSlice'
import { setsReducer } from './setsSlice'
import { sushiReducer } from './sushiSlice'
import { cartReducer } from './cartSlice'

export const store = configureStore({
    reducer: {
        promo: promoReducer,
        pizza: pizzaReducer,
        burger: burgerReducer,
        rolls: rollsReducer,
        sets: setsReducer,
        sushi: sushiReducer,
        cart: cartReducer,
    }
})