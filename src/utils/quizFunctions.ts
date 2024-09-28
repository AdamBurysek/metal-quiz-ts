import type { FinalArray } from './types'

export function getImageUrl(array: FinalArray) {
  return require(`../img/${array.image}.webp`)
}

export function translatePage(id: number) {
  return `translateX(${id * 100}%)`
}

export function slidesWidth(lenght: number) {
  return `${lenght * 100}%`
}

export function slidePage(num: number) {
  return `${num * 100}%`
}
