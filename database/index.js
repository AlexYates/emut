import { v4 as uuidv4 } from 'uuid'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum()

const createImage = () => ({
  description: lorem.generateWords(5),
  height: 100,
  small: 'https://placehold.it/1x1',
  large: 'https://placehold.it/2x2',
  width: 100,
})

const createIngredients = () => ({
  images: createImage(),
  title: lorem.generateWords(1),
  uuid: uuidv4(),
})

const createProduct = () => ({
  description: new Array(2).fill(null).map(() => lorem.generateParagraphs(1)),
  images: createImage(),
  ingredients: new Array(9).fill(null).map(() => createIngredients()),
  price: Number(50 + Math.random() * 950).toFixed(2),
  title: lorem.generateWords(3),
  uuid: uuidv4(),
})

const products = new Array(96).fill(null).map(() => createProduct())

export { products }
