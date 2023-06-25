import { BoutiqueDress, Bride, ShoppingExperience } from './interfaces'

class BridalBoutique {
  dressCollection: BoutiqueDress[];
  constructor(dressCollection: BoutiqueDress[]) {
    this.dressCollection = dressCollection;
  }

  findPerfectDress(bride: Bride): BoutiqueDress | null {
    for (const dress of this.dressCollection) {
      if (dress.style === bride.style && dress.color === bride.color && dress.size === bride.size) {
        return dress;
      }
    }
    return null;
  }

  provideMemorableShoppingExperience(bride: Bride): ShoppingExperience {
    const dress = this.findPerfectDress(bride);
    const experience: ShoppingExperience = {
      bride,
      dress,
      success: dress !== null
    };
    return experience;
  }
}

export { BridalBoutique };