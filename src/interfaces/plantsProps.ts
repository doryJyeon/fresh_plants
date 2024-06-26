export interface PlantsDataProps {
  [id: string]: PlantProps
}

export interface PlantProps {
  name: string
  img_url: string
  price: number
  tag: string
}