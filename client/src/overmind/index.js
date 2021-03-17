import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook
} from 'overmind-react'

export const config = {
  state: {
    productQuantity: 1,
    products: []
  },
  actions: {
    fetchProduct({ state }, products) {
      state.products = products;
    },
  }
}

export const useState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()

