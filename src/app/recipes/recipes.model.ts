export class Recipe {
  public name: String;
  public description: String;
  public image: String;
  constructor(name: string, description: string, image: string) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}
