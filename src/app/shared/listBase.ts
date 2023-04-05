import { ActivatedRoute, Router } from '@angular/router';

export interface Item {
  selected?: boolean;
  deleted?: boolean;
}
export abstract class ListBase<T extends Item> {
  selected: T | undefined | null = null;
  items: T[] = [];
  filteredList: T[] = [];
  showFilteredList = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  select(item: T) {
    if (!item.selected) {
      this.selected = item;
      this.items.forEach((p) => (p.selected = false));
      item.selected = true;
    } else {
      item.selected = false;
    }
  }

  delete() {
    const itemToDelete = this.items.find((item) => item['selected'] === true);
    if (itemToDelete) {
      itemToDelete['deleted'] = true;
      const index = this.items.findIndex((item) => item === itemToDelete);
      this.items.splice(index, 1, itemToDelete);
    }
  }

  search(searchTerm: string) {
    searchTerm = searchTerm.trim();
    if (!searchTerm) {
      this.filteredList = [];
      this.showFilteredList = false;
      return;
    }
    this.filteredList = this.items.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    this.showFilteredList = true;
  }
}
