import { CreateResponses, Faker } from "./types"
import {map} from "zod";

const fakeAnswers: string[] = [
  "GlitterGlo Lipstick",
  "QuantumQuench Energy Drink",
  "StellarScent Perfume",
  "PurrfectPillow Pet Bed",
]

const fakeScores: number[] = [3, 2, 1]

const fakeCategories: string[] = ["Math", "Code", "Science"]

const getRandomItem = <T>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

// TODO: Oppgave 1 - Not implemented
const faker: Faker = {
  id : getRandomId,
  answer : () => getRandomItem<string>(fakeAnswers),
  score : () => getRandomItem<number>(fakeScores),
  category : () => getRandomItem<string>(fakeCategories),
}

// TODO: Oppgave 1 - Not implemented
const createResponses: CreateResponses = ({
  existingResponses,
  count,
  faker,
}) => {
  let responses = new Map(existingResponses);
  for (let a = 0; a < count; a++ ) {
    //response
  }
  return responses
}

// TODO: Oppgave 3 - Not implemented
const calcAverageScore = (responses: Map<string, Response>) => {
  return 0
}

export { createResponses }
